// Звук попадания по игроку.
// Прямоугольный осциллятор с нисходящей развёрткой 250→50 Гц за 0.2с.
import { getAudioCtx, getMasterGain, isAudioReady } from '../context';

export function playHitSound(): void {
  if (!isAudioReady()) return;
  const ctx = getAudioCtx();
  const t = ctx.currentTime + 0.005;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(250, t);
  osc.frequency.linearRampToValueAtTime(50, t + 0.15);
  gain.gain.setValueAtTime(0.2, t);
  gain.gain.linearRampToValueAtTime(0, t + 0.2);
  osc.connect(gain);
  gain.connect(getMasterGain());
  osc.start(t);
  osc.stop(t + 0.2);
}
