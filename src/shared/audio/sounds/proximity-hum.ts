// Гул ближних кораблей — аналогичен двигателю, но на других частотах (70/140 Гц).
// Громкость плавно нарастает при приближении (дальность 200 ед.) и затихает при удалении.
import { getAudioCtx, getMasterGain, isAudioReady } from '../context';

let proxOsc1: OscillatorNode | null = null;
let proxOsc2: OscillatorNode | null = null;
let proxGain: GainNode | null = null;

export function startProximityHum(): void {
  if (!isAudioReady() || proxOsc1) return;
  const ctx = getAudioCtx();

  proxGain = ctx.createGain();
  proxGain.gain.value = 0;

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 180;
  filter.connect(proxGain);
  proxGain.connect(getMasterGain());

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
  proxGain.gain.linearRampToValueAtTime(t * 0.04, getAudioCtx().currentTime + 0.05);
}

export function stopProximityHum(): void {
  proxOsc1?.stop();
  proxOsc2?.stop();
  proxOsc1 = null;
  proxOsc2 = null;
  proxGain = null;
}
