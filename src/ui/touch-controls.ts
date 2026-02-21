import { resumeAudio } from '../audio/sound';
import { state } from '../state';
import { playerPlane } from '../systems/player';
import { toggleTargetLock } from './markers';

let aimReturnInterval: number | null = null;

export function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export function initTouchControls(pauseCallback: () => void): void {
  if (!isTouchDevice()) return;

  // Hide desktop-only cursor
  const mouseCursor = document.getElementById('mouse-cursor');
  if (mouseCursor) mouseCursor.style.display = 'none';

  const container = document.getElementById('touch-controls')!;
  container.innerHTML = '';

  // --- Aim zone (right half of screen) ---
  const aimZone = document.createElement('div');
  aimZone.className = 'touch-aim-zone';
  container.appendChild(aimZone);

  let aimTouchId: number | null = null;
  let aimStartX = 0;
  let aimStartY = 0;
  const AIM_SENSITIVITY = 150; // px for full ±1 range

  aimZone.addEventListener(
    'touchstart',
    (e) => {
      e.preventDefault();
      resumeAudio();
      for (const t of Array.from(e.changedTouches)) {
        if (aimTouchId === null) {
          aimTouchId = t.identifier;
          aimStartX = t.clientX;
          aimStartY = t.clientY;
          if (aimReturnInterval !== null) {
            clearInterval(aimReturnInterval);
            aimReturnInterval = null;
          }
        }
      }
    },
    { passive: false },
  );

  aimZone.addEventListener(
    'touchmove',
    (e) => {
      e.preventDefault();
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier === aimTouchId) {
          const dx = t.clientX - aimStartX;
          const dy = t.clientY - aimStartY;
          state.mouseX = clamp(dx / AIM_SENSITIVITY, -1, 1);
          state.mouseY = clamp(dy / AIM_SENSITIVITY, -1, 1);
          state.mouseActive = true;
        }
      }
    },
    { passive: false },
  );

  const handleAimEnd = (e: TouchEvent) => {
    for (const t of Array.from(e.changedTouches)) {
      if (t.identifier === aimTouchId) {
        aimTouchId = null;
        // Smoothly return aim to center
        aimReturnInterval = window.setInterval(() => {
          state.mouseX *= 0.8;
          state.mouseY *= 0.8;
          if (Math.abs(state.mouseX) < 0.01 && Math.abs(state.mouseY) < 0.01) {
            state.mouseX = 0;
            state.mouseY = 0;
            if (aimReturnInterval !== null) {
              clearInterval(aimReturnInterval);
              aimReturnInterval = null;
            }
          }
        }, 16);
      }
    }
  };
  aimZone.addEventListener('touchend', handleAimEnd);
  aimZone.addEventListener('touchcancel', handleAimEnd);

  // --- Virtual joystick (left side) ---
  const joystickBase = document.createElement('div');
  joystickBase.className = 'touch-joystick';
  const joystickKnob = document.createElement('div');
  joystickKnob.className = 'touch-joystick-knob';
  joystickBase.appendChild(joystickKnob);
  container.appendChild(joystickBase);

  let joyTouchId: number | null = null;
  let joyCenterX = 0;
  let joyCenterY = 0;
  const JOY_MAX_OFFSET = 40;
  const JOY_DEADZONE = 0.3;

  joystickBase.addEventListener(
    'touchstart',
    (e) => {
      e.preventDefault();
      resumeAudio();
      for (const t of Array.from(e.changedTouches)) {
        if (joyTouchId === null) {
          joyTouchId = t.identifier;
          const rect = joystickBase.getBoundingClientRect();
          joyCenterX = rect.left + rect.width / 2;
          joyCenterY = rect.top + rect.height / 2;
        }
      }
    },
    { passive: false },
  );

  joystickBase.addEventListener(
    'touchmove',
    (e) => {
      e.preventDefault();
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier === joyTouchId) {
          let dx = t.clientX - joyCenterX;
          let dy = t.clientY - joyCenterY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > JOY_MAX_OFFSET) {
            dx = (dx / dist) * JOY_MAX_OFFSET;
            dy = (dy / dist) * JOY_MAX_OFFSET;
          }
          // Move knob visually
          joystickKnob.style.transform = `translate(${dx - 25}px, ${dy - 25}px)`;

          const nx = dx / JOY_MAX_OFFSET;
          const ny = dy / JOY_MAX_OFFSET;

          // Horizontal → roll
          state.keys['KeyA'] = nx < -JOY_DEADZONE;
          state.keys['KeyD'] = nx > JOY_DEADZONE;
          // Vertical → speed (up = boost, down = brake)
          state.keys['KeyW'] = ny < -JOY_DEADZONE;
          state.keys['KeyS'] = ny > JOY_DEADZONE;
        }
      }
    },
    { passive: false },
  );

  const handleJoyEnd = (e: TouchEvent) => {
    for (const t of Array.from(e.changedTouches)) {
      if (t.identifier === joyTouchId) {
        joyTouchId = null;
        joystickKnob.style.transform = 'translate(-25px, -25px)';
        state.keys['KeyA'] = false;
        state.keys['KeyD'] = false;
        state.keys['KeyW'] = false;
        state.keys['KeyS'] = false;
      }
    }
  };
  joystickBase.addEventListener('touchend', handleJoyEnd);
  joystickBase.addEventListener('touchcancel', handleJoyEnd);

  // --- Fire button ---
  const fireBtn = document.createElement('div');
  fireBtn.className = 'touch-fire-btn';
  fireBtn.textContent = 'FIRE';
  container.appendChild(fireBtn);

  fireBtn.addEventListener(
    'touchstart',
    (e) => {
      e.preventDefault();
      resumeAudio();
      state.keys['MouseLeft'] = true;
      fireBtn.classList.add('active');
    },
    { passive: false },
  );
  const handleFireEnd = (e: TouchEvent) => {
    e.preventDefault();
    state.keys['MouseLeft'] = false;
    fireBtn.classList.remove('active');
  };
  fireBtn.addEventListener('touchend', handleFireEnd, { passive: false });
  fireBtn.addEventListener('touchcancel', handleFireEnd, { passive: false });

  // --- Lock button ---
  const lockBtn = document.createElement('div');
  lockBtn.className = 'touch-lock-btn';
  lockBtn.textContent = 'LOCK';
  container.appendChild(lockBtn);

  lockBtn.addEventListener(
    'touchstart',
    (e) => {
      e.preventDefault();
      resumeAudio();
      toggleTargetLock(playerPlane);
      lockBtn.classList.add('active');
      setTimeout(() => lockBtn.classList.remove('active'), 200);
    },
    { passive: false },
  );

  // --- Pause button ---
  const pauseBtn = document.createElement('div');
  pauseBtn.className = 'touch-pause-btn';
  pauseBtn.textContent = '❚❚';
  container.appendChild(pauseBtn);

  pauseBtn.addEventListener(
    'touchstart',
    (e) => {
      e.preventDefault();
      pauseCallback();
    },
    { passive: false },
  );
}

function clamp(v: number, min: number, max: number): number {
  return v < min ? min : v > max ? max : v;
}
