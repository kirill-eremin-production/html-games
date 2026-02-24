import { playLaserSound } from '../sounds/laser';

// Мок аудио контекста — единый объект для всех вызовов
let mockCurrentTime = 0;
let lastOsc: any = null;
let lastGain: any = null;

const mockMasterGain = {};

const mockAudioCtx = {
  get currentTime() {
    return mockCurrentTime;
  },
  createOscillator: jest.fn(() => {
    lastOsc = {
      type: '',
      frequency: {
        setValueAtTime: jest.fn(),
        linearRampToValueAtTime: jest.fn(),
      },
      connect: jest.fn(),
      start: jest.fn(),
      stop: jest.fn(),
    };
    return lastOsc;
  }),
  createGain: jest.fn(() => {
    lastGain = {
      gain: {
        setValueAtTime: jest.fn(),
        linearRampToValueAtTime: jest.fn(),
      },
      connect: jest.fn(),
    };
    return lastGain;
  }),
};

jest.mock('../context', () => ({
  isAudioReady: jest.fn(() => true),
  getAudioCtx: jest.fn(() => mockAudioCtx),
  getMasterGain: jest.fn(() => mockMasterGain),
}));

// lastPlayerLaserTime и lastOtherLaserTime — модульное состояние, не сбрасывается между тестами.
// Используем увеличивающееся время, чтобы всегда проходить тротлинг.
let timeBase = 100;

describe('playLaserSound', () => {
  beforeEach(() => {
    timeBase += 10; // гарантируем прохождение тротлинга для каждого теста
    mockCurrentTime = timeBase;
    lastOsc = null;
    lastGain = null;
    jest.clearAllMocks();
  });

  it('создаёт осциллятор sawtooth', () => {
    playLaserSound(true);
    expect(lastOsc.type).toBe('sawtooth');
  });

  it('для игрока: восходящий чирп 800→2000 Гц', () => {
    playLaserSound(true);
    expect(lastOsc.frequency.setValueAtTime).toHaveBeenCalledWith(800, expect.any(Number));
    expect(lastOsc.frequency.linearRampToValueAtTime).toHaveBeenCalledWith(
      2000,
      expect.any(Number),
    );
  });

  it('для врага: нисходящий чирп 400→200 Гц', () => {
    playLaserSound(false);
    expect(lastOsc.frequency.setValueAtTime).toHaveBeenCalledWith(400, expect.any(Number));
    expect(lastOsc.frequency.linearRampToValueAtTime).toHaveBeenCalledWith(200, expect.any(Number));
  });

  it('для игрока: громкость 0.35', () => {
    playLaserSound(true);
    expect(lastGain.gain.setValueAtTime).toHaveBeenCalledWith(0.35, expect.any(Number));
  });

  it('для врага: громкость 0.1', () => {
    playLaserSound(false);
    expect(lastGain.gain.setValueAtTime).toHaveBeenCalledWith(0.1, expect.any(Number));
  });

  it('тротлинг игрока: 80мс', () => {
    const t0 = timeBase;
    mockCurrentTime = t0;
    playLaserSound(true);
    expect(mockAudioCtx.createOscillator).toHaveBeenCalledTimes(1);

    mockCurrentTime = t0 + 0.05; // +50мс — слишком рано
    playLaserSound(true);
    expect(mockAudioCtx.createOscillator).toHaveBeenCalledTimes(1);

    mockCurrentTime = t0 + 0.1; // +100мс — прошло достаточно
    playLaserSound(true);
    expect(mockAudioCtx.createOscillator).toHaveBeenCalledTimes(2);
  });

  it('тротлинг врагов: 150мс', () => {
    const t0 = timeBase;
    mockCurrentTime = t0;
    playLaserSound(false);
    expect(mockAudioCtx.createOscillator).toHaveBeenCalledTimes(1);

    mockCurrentTime = t0 + 0.1; // +100мс — слишком рано
    playLaserSound(false);
    expect(mockAudioCtx.createOscillator).toHaveBeenCalledTimes(1);

    mockCurrentTime = t0 + 0.2; // +200мс — прошло достаточно
    playLaserSound(false);
    expect(mockAudioCtx.createOscillator).toHaveBeenCalledTimes(2);
  });

  it('не воспроизводит звук если аудио не готово', () => {
    const { isAudioReady } = jest.requireMock('../context');
    (isAudioReady as jest.Mock).mockReturnValueOnce(false);

    playLaserSound(true);
    expect(mockAudioCtx.createOscillator).not.toHaveBeenCalled();
  });
});
