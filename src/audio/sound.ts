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
