import { useCallback, useEffect, useRef } from 'react';

import s from './ActionButton.module.css';

interface Props {
  text: string;
  onClick: () => void;
}

/* ── Ice particle system ── */

interface Particle {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  alpha: number;
  da: number;
}

function createParticles(w: number, h: number, count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 0.5 + Math.random() * 1.5,
    dx: (Math.random() - 0.5) * 0.15,
    dy: 0.08 + Math.random() * 0.12,
    alpha: 0.15 + Math.random() * 0.4,
    da: (Math.random() - 0.5) * 0.005,
  }));
}

function tickParticles(ps: Particle[], w: number, h: number) {
  for (const p of ps) {
    p.x += p.dx;
    p.y += p.dy;
    p.alpha += p.da;
    if (p.alpha <= 0.1 || p.alpha >= 0.6) p.da = -p.da;
    if (p.x < 0) p.x = w;
    if (p.x > w) p.x = 0;
    if (p.y > h) {
      p.y = 0;
      p.x = Math.random() * w;
    }
  }
}

function drawCanvas(
  ctx: CanvasRenderingContext2D,
  ps: Particle[],
  w: number,
  h: number,
  t: number,
) {
  ctx.clearRect(0, 0, w, h);

  // aurora borealis — colors sweep edge to edge
  const colors = [
    [60, 200, 140], // green
    [80, 140, 220], // blue
    [140, 80, 200], // violet
    [60, 200, 140], // green (wrap)
  ];

  // shift gradient origin across 2x width, then tile
  const shift = ((t * 0.00005) % 1) * w;
  const ag = ctx.createLinearGradient(-w + shift, 0, w + shift, 0);
  for (let i = 0; i < colors.length; i++) {
    const [r, g, b] = colors[i];
    const a = 0.2 + 0.08 * Math.sin(t * 0.0012 + i * 1.5);
    ag.addColorStop(i / (colors.length - 1), `rgba(${r},${g},${b},${a})`);
  }
  ctx.fillStyle = ag;
  ctx.fillRect(0, 0, w, h);

  // top frost line
  const gt = ctx.createLinearGradient(0, 0, 0, 3);
  gt.addColorStop(0, 'rgba(140,200,240,0.12)');
  gt.addColorStop(1, 'rgba(140,200,240,0)');
  ctx.fillStyle = gt;
  ctx.fillRect(0, 0, w, 3);

  // particles
  for (const p of ps) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200,230,255,${p.alpha})`;
    ctx.fill();
  }
}

/* ── Ice click sound via Web Audio API ── */

let audioCtx: AudioContext | null = null;

function playIceClick() {
  if (!audioCtx) audioCtx = new AudioContext();
  const ctx = audioCtx;
  const now = ctx.currentTime;

  // soft frost crackle — quiet highpass noise
  const bufLen = ctx.sampleRate * 0.03;
  const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufLen; i++) {
    const env = 1 - i / bufLen;
    data[i] = (Math.random() * 2 - 1) * env * env * env * 0.12;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buf;

  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 6000;

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.15, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

  noise.connect(hp).connect(noiseGain).connect(ctx.destination);
  noise.start(now);
  noise.stop(now + 0.03);

  // crystalline chime — three high sine tones
  for (const freq of [4200, 5600, 7200]) {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;

    const g = ctx.createGain();
    g.gain.setValueAtTime(0.09, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(g).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.35);
  }
}

/* ── Component ── */

export function ActionButton({ text, onClick }: Props) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;

    const ctx = cvs.getContext('2d')!;
    const rect = cvs.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    cvs.width = rect.width * dpr;
    cvs.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    particlesRef.current = createParticles(w, h, 24);

    function loop(t: number) {
      tickParticles(particlesRef.current, w, h);
      drawCanvas(ctx, particlesRef.current, w, h, t);
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const touchedRef = useRef(false);
  const onClickRef = useRef(onClick);
  onClickRef.current = onClick;

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    function onTouch(e: TouchEvent) {
      e.preventDefault();
      touchedRef.current = true;
      btn!.classList.add(s.pressed);
      setTimeout(() => btn!.classList.remove(s.pressed), 120);
      playIceClick();
      onClickRef.current();
    }

    btn.addEventListener('touchstart', onTouch, { passive: false });
    return () => btn.removeEventListener('touchstart', onTouch);
  }, []);

  const handleClick = useCallback(() => {
    if (touchedRef.current) {
      touchedRef.current = false;
      return;
    }
    playIceClick();
    onClick();
  }, [onClick]);

  return (
    <div className={s.wrap}>
      <button ref={btnRef} className={s.button} onClick={handleClick}>
        <canvas ref={canvasRef} className={s.canvas} />
        <span className={s.text}>{text}</span>
      </button>
    </div>
  );
}
