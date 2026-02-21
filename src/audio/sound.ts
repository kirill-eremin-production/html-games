let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let lastPlayerLaserTime = 0;
let lastOtherLaserTime = 0;
let lastExplosionTime = 0;

export function initAudio(): void {
  try {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.6;
    masterGain.connect(audioCtx.destination);
  } catch {
    audioCtx = null;
  }
}

export function resumeAudio(): void {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function isAudioReady(): boolean {
  return audioCtx !== null && audioCtx.state === 'running';
}

export function isAudioInitialized(): boolean {
  return audioCtx !== null;
}

export function playLaserSound(isPlayer: boolean): void {
  if (!isAudioReady()) return;
  const now = audioCtx!.currentTime;
  if (isPlayer) {
    if (now - lastPlayerLaserTime < 0.08) return;
    lastPlayerLaserTime = now;
  } else {
    if (now - lastOtherLaserTime < 0.15) return;
    lastOtherLaserTime = now;
  }
  const t = now + 0.005;
  const osc = audioCtx!.createOscillator();
  const gain = audioCtx!.createGain();
  osc.type = 'sawtooth';
  if (isPlayer) {
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.linearRampToValueAtTime(2000, t + 0.05);
    gain.gain.setValueAtTime(0.35, t);
    gain.gain.linearRampToValueAtTime(0, t + 0.1);
  } else {
    osc.frequency.setValueAtTime(400, t);
    osc.frequency.linearRampToValueAtTime(200, t + 0.06);
    gain.gain.setValueAtTime(0.1, t);
    gain.gain.linearRampToValueAtTime(0, t + 0.1);
  }
  osc.connect(gain);
  gain.connect(masterGain!);
  osc.start(t);
  osc.stop(t + 0.12);
}

export function playExplosionSound(size: number): void {
  if (!isAudioReady()) return;
  const now = audioCtx!.currentTime;
  if (now - lastExplosionTime < 0.06) return;
  lastExplosionTime = now;
  const t = now + 0.005;
  const duration = Math.min(0.2 + size * 0.1, 0.8);
  const bufLen = Math.floor(audioCtx!.sampleRate * duration);
  const buffer = audioCtx!.createBuffer(1, bufLen, audioCtx!.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufLen; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufLen, 1.2);
  }
  const source = audioCtx!.createBufferSource();
  source.buffer = buffer;
  const gain = audioCtx!.createGain();
  const vol = Math.min(0.5, 0.1 + size * 0.06);
  gain.gain.setValueAtTime(vol, t);
  gain.gain.linearRampToValueAtTime(0, t + duration);
  const filter = audioCtx!.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(600 + size * 300, t);
  filter.frequency.linearRampToValueAtTime(100, t + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain!);
  source.start(t);
}

// ── Player engine hum (continuous drone) ──

let engineOsc1: OscillatorNode | null = null;
let engineOsc2: OscillatorNode | null = null;
let engineGain: GainNode | null = null;

export function startEngineHum(): void {
  if (!isAudioReady() || engineOsc1) return;
  const ctx = audioCtx!;

  engineGain = ctx.createGain();
  engineGain.gain.value = 0.08;

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 200;
  filter.connect(engineGain);
  engineGain.connect(masterGain!);

  engineOsc1 = ctx.createOscillator();
  engineOsc1.type = 'triangle';
  engineOsc1.frequency.value = 55;
  engineOsc1.connect(filter);
  engineOsc1.start();

  const harmGain = ctx.createGain();
  harmGain.gain.value = 0.4; // harmonic is quieter relative to base
  harmGain.connect(filter);

  engineOsc2 = ctx.createOscillator();
  engineOsc2.type = 'sawtooth';
  engineOsc2.frequency.value = 110;
  engineOsc2.connect(harmGain);
  engineOsc2.start();
}

export function updateEngineHum(speedRatio: number): void {
  if (!engineOsc1 || !engineGain) return;
  // speedRatio: 0..1 (baseSpeed/boostSpeed .. 1)
  engineOsc1.frequency.value = 55 + speedRatio * 8;
  engineOsc2!.frequency.value = 110 + speedRatio * 16;
  engineGain.gain.value = 0.06 + speedRatio * 0.04;
}

export function stopEngineHum(): void {
  engineOsc1?.stop();
  engineOsc2?.stop();
  engineOsc1 = null;
  engineOsc2 = null;
  engineGain = null;
}

// ── Proximity engine hum (nearby ships) ──

let proxOsc1: OscillatorNode | null = null;
let proxOsc2: OscillatorNode | null = null;
let proxGain: GainNode | null = null;

export function startProximityHum(): void {
  if (!isAudioReady() || proxOsc1) return;
  const ctx = audioCtx!;

  proxGain = ctx.createGain();
  proxGain.gain.value = 0;

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 180;
  filter.connect(proxGain);
  proxGain.connect(masterGain!);

  proxOsc1 = ctx.createOscillator();
  proxOsc1.type = 'triangle';
  proxOsc1.frequency.value = 70;
  proxOsc1.connect(filter);
  proxOsc1.start();

  const harmGain = ctx.createGain();
  harmGain.gain.value = 0.35;
  harmGain.connect(filter);

  proxOsc2 = ctx.createOscillator();
  proxOsc2.type = 'sawtooth';
  proxOsc2.frequency.value = 140;
  proxOsc2.connect(harmGain);
  proxOsc2.start();
}

export function updateProximityHum(closestDistSq: number): void {
  if (!proxGain) return;
  const RANGE = 200;
  const dist = Math.sqrt(closestDistSq);
  const t = Math.max(0, 1 - dist / RANGE);
  // Smooth ramp to avoid clicks
  proxGain.gain.linearRampToValueAtTime(t * 0.04, audioCtx!.currentTime + 0.05);
}

export function stopProximityHum(): void {
  proxOsc1?.stop();
  proxOsc2?.stop();
  proxOsc1 = null;
  proxOsc2 = null;
  proxGain = null;
}

export function playHitSound(): void {
  if (!isAudioReady()) return;
  const t = audioCtx!.currentTime + 0.005;
  const osc = audioCtx!.createOscillator();
  const gain = audioCtx!.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(250, t);
  osc.frequency.linearRampToValueAtTime(50, t + 0.15);
  gain.gain.setValueAtTime(0.2, t);
  gain.gain.linearRampToValueAtTime(0, t + 0.2);
  osc.connect(gain);
  gain.connect(masterGain!);
  osc.start(t);
  osc.stop(t + 0.2);
}
