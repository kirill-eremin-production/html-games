// Пилообразный осциллятор с частотной развёрткой.
// Игрок: 800→2000 Гц восходящий чирп, громкий (0.35). Остальные: 400→200 Гц нисходящий, тихий (0.1).
// Тротлинг по источнику для избежания наложения (игрок 80мс, остальные 150мс).
import { getAudioCtx, getMasterGain, isAudioReady } from '../context';

let lastPlayerLaserTime = 0;
let lastOtherLaserTime = 0;

export function playLaserSound(isPlayer: boolean): void {
  if (!isAudioReady()) return;
  const ctx = getAudioCtx();
  const now = ctx.currentTime;
  if (isPlayer) {
    if (now - lastPlayerLaserTime < 0.08) return;
    lastPlayerLaserTime = now;
  } else {
    if (now - lastOtherLaserTime < 0.15) return;
    lastOtherLaserTime = now;
  }
  const t = now + 0.005;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
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
  gain.connect(getMasterGain());
  osc.start(t);
  osc.stop(t + 0.12);
}
