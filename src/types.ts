import * as THREE from 'three';

export interface FighterAI {
  state: 'chase' | 'evade' | 'orbit';
  timer: number;
  evadeDir: THREE.Vector3;
  target: { mesh: { position: THREE.Vector3 }; name: string } | null;
}

export interface Fighter {
  mesh: THREE.Group;
  name: string;
  healthBar: THREE.Group;
  healthFill: THREE.Mesh;
  health: number;
  maxHealth: number;
  speed: number;
  shootTimer: number;
  ai: FighterAI;
}

export interface Subsystem {
  name: string;
  mesh: THREE.Group | THREE.Mesh;
  health: number;
  maxHealth: number;
  center: THREE.Vector3;
  radius: number;
}

export interface CapitalShip {
  mesh: THREE.Group;
  subsystems: Subsystem[];
  alive: boolean;
  turretTimer: number;
}

export interface LaserData {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
  team: 'player' | 'ally' | 'enemy';
  damage: number;
  shooterName: string;
}

export interface ExplosionParticle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
}

export interface Explosion {
  particles: ExplosionParticle[];
  timer: number;
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
  explosions: Explosion[];
  killFeed: KillFeedEntry[];
  keys: Record<string, boolean>;
  mouseX: number;
  mouseY: number;
  mouseActive: boolean;
  shootCooldown: number;
  messageTimer: number;
  damageFlash: number;
  noDamageTimer: number;
  respawnQueue: RespawnEntry[];
}
