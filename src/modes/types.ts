export interface ModeContext {
  [key: string]: unknown;
}

export interface GameModeHandler {
  update(dt: number): void;
  enter(context?: ModeContext): void;
  exit(): void;
}
