// Всплеск белого шума через НЧ-фильтр с экспоненциальным затуханием.
// Длительность и громкость масштабируются с размером взрыва (0.2–0.8с).
// Фильтр свипает от 600+size*300 Гц вниз до 100 Гц, создавая гулкий хвост.
import { getAudioCtx, getMasterGain, isAudioReady } from '../context';

let lastExplosionTime = 0;

export function playExplosionSound(size: number): void {
  if (!isAudioReady()) return;
  const ctx = getAudioCtx();
  const now = ctx.currentTime;
  if (now - lastExplosionTime < 0.06) return;
  lastExplosionTime = now;
  const t = now + 0.005;
  const duration = Math.min(0.2 + size * 0.1, 0.8);
  const bufLen = Math.floor(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, bufLen, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufLen; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufLen, 1.2);
  }
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  const gain = ctx.createGain();
  const vol = Math.min(0.5, 0.1 + size * 0.06);
  gain.gain.setValueAtTime(vol, t);
  gain.gain.linearRampToValueAtTime(0, t + duration);
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(600 + size * 300, t);
  filter.frequency.linearRampToValueAtTime(100, t + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(getMasterGain());
  source.start(t);
}
