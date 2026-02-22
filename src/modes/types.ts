export interface GameModeHandler {
  update(dt: number): void;
  enter(): void;
  exit(): void;
}
