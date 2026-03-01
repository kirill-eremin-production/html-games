/**
 * Звук выстрела для интерьерного режима.
 *
 * Square wave 600→400Hz, длительность 0.08с.
 * Тротлинг 80мс.
 */
import { getAudioCtx, getMasterGain, isAudioReady } from '@/shared/audio/context';

let lastShotTime = 0;

export function playInteriorShotSound(): void {
  if (!isAudioReady()) return;
  const ctx = getAudioCtx();
  const now = ctx.currentTime;
  if (now - lastShotTime < 0.08) return;
  lastShotTime = now;

  const t = now + 0.005;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'square';
  osc.frequency.setValueAtTime(600, t);
  osc.frequency.linearRampToValueAtTime(400, t + 0.06);

  gain.gain.setValueAtTime(0.25, t);
  gain.gain.linearRampToValueAtTime(0, t + 0.08);

  osc.connect(gain);
  gain.connect(getMasterGain());
  osc.start(t);
  osc.stop(t + 0.1);
}
