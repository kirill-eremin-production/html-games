import type { FlightModelId } from './config/flight-models';
import type { EngineMesh, TransformNode, Vector3 } from '@/shared/core';

export interface FighterAI {
  state: 'chase' | 'evade' | 'orbit';
  timer: number;
  evadeDir: Vector3;
  target: { mesh: { position: Vector3 }; name: string } | null;
}

export interface Fighter {
  mesh: TransformNode;
  name: string;
  healthBar: TransformNode;
  healthFill: EngineMesh;
  health: number;
  maxHealth: number;
  speed: number;
  shootTimer: number;
  ai: FighterAI;
}

export interface Subsystem {
  name: string;
  mesh: TransformNode | EngineMesh;
  health: number;
  maxHealth: number;
  center: Vector3;
  radius: number;
}

export interface CapitalShip {
  mesh: TransformNode;
  subsystems: Subsystem[];
  alive: boolean;
  turretTimer: number;
}

export interface LaserData {
  mesh: EngineMesh;
  velocity: Vector3;
  life: number;
  team: 'player' | 'ally' | 'enemy';
  damage: number;
  shooterName: string;
}

export interface KillFeedEntry {
  killer: string;
  victim: string;
  killerTeam: 'player' | 'ally' | 'enemy';
  victimTeam: 'player' | 'ally' | 'enemy';
  timer: number;
}

export interface RespawnEntry {
  team: 'ally' | 'enemy';
  timer: number;
}

export type LockedTarget =
  | { kind: 'fighter'; fighter: Fighter }
  | { kind: 'subsystem'; subsystem: Subsystem; ship: CapitalShip };

export interface GameState {
  running: boolean;
  phase: 1 | 2;
  score: number;
  lives: number;
  playerHealth: number;
  maxHealth: number;
  speed: number;
  baseSpeed: number;
  boostSpeed: number;
  invulnTimer: number;
  totalEnemyKills: number;
  lastAttacker: string;
  bullets: LaserData[];
  allyBullets: LaserData[];
  enemyBullets: LaserData[];
  allies: Fighter[];
  enemies: Fighter[];
  capitalShips: CapitalShip[];
  killFeed: KillFeedEntry[];
  keys: Record<string, boolean>;
  mouseX: number;
  mouseY: number;
  mouseActive: boolean;
  shootCooldown: number;
  messageTimer: number;
  damageFlash: number;
  noDamageTimer: number;
  flightModel: FlightModelId;
  respawnQueue: RespawnEntry[];
  lockedTarget: LockedTarget | null;
  hudFrameCounter: number;
  explorationTime: number;
}
