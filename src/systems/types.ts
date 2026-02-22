export interface GameSystem {
  readonly id: string;
  init?(): void;
  update(dt: number): void;
  cleanup?(): void;
}

export function initSystems(systems: GameSystem[]): void {
  for (const s of systems) s.init?.();
}

export function updateSystems(systems: GameSystem[], dt: number): void {
  for (const s of systems) s.update(dt);
}

export function cleanupSystems(systems: GameSystem[]): void {
  for (const s of systems) s.cleanup?.();
}
