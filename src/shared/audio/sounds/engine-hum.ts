// Непрерывный гул двигателя игрока.
// Треугольный осциллятор 55 Гц (основа) + пилообразный 110 Гц (гармоника) через НЧ-фильтр 200 Гц.
// Частота и громкость слегка меняются в зависимости от скорости (speedRatio 0..1).
import { getAudioCtx, getMasterGain, isAudioReady } from '../context';

let engineOsc1: OscillatorNode | null = null;
let engineOsc2: OscillatorNode | null = null;
let engineGain: GainNode | null = null;

export function startEngineHum(): void {
  if (!isAudioReady() || engineOsc1) return;
  const ctx = getAudioCtx();

  engineGain = ctx.createGain();
  engineGain.gain.value = 0.08;

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 200;
  filter.connect(engineGain);
  engineGain.connect(getMasterGain());

  engineOsc1 = ctx.createOscillator();
  engineOsc1.type = 'triangle';
  engineOsc1.frequency.value = 55;
  engineOsc1.connect(filter);
  engineOsc1.start();

  const harmGain = ctx.createGain();
  harmGain.gain.value = 0.4;
  harmGain.connect(filter);

  engineOsc2 = ctx.createOscillator();
  engineOsc2.type = 'sawtooth';
  engineOsc2.frequency.value = 110;
  engineOsc2.connect(harmGain);
  engineOsc2.start();
}

export function updateEngineHum(speedRatio: number): void {
  if (!engineOsc1 || !engineGain) return;
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
