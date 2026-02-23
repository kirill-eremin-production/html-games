let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;

/** Создаёт AudioContext и мастер-гейн (общая громкость 0.6). При ошибке — тихо отключает звук. */
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

/** Возобновляет suspended-контекст (браузеры блокируют звук до первого взаимодействия). */
export function resumeAudio(): void {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

/** true если контекст создан и работает — гарантирует безопасность вызовов звуков. */
export function isAudioReady(): boolean {
  return audioCtx !== null && audioCtx.state === 'running';
}

/** true если контекст создан (может быть suspended — ещё не resumed). */
export function isAudioInitialized(): boolean {
  return audioCtx !== null;
}

/** Возвращает AudioContext. Вызывать только после проверки isAudioReady(). */
export function getAudioCtx(): AudioContext {
  return audioCtx!;
}

/** Возвращает мастер-гейн — все звуки подключаются к нему. */
export function getMasterGain(): GainNode {
  return masterGain!;
}
