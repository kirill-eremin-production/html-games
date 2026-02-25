import { UI_CONFIG } from '@/shared/config/ui';
import { TransformNode, Vector3 } from '@/shared/core';
import { planetMeshes } from '@/shared/refs/exploration-refs';
import { state } from '@/shared/state';

import { queryAliveCapitalShips, queryAllFighters } from '@/entities/ecs-queries';

const M = UI_CONFIG.minimap;
const EXPLORATION_SCALE = 0.00006;
const minimapCanvas = document.getElementById('minimap-canvas') as HTMLCanvasElement;
const mCtx = minimapCanvas.getContext('2d')!;
const _mmDir = new Vector3();
const TWO_PI = Math.PI * 2;

function drawPlayerDot(cx: number, cy: number, playerPlane: TransformNode): void {
  mCtx.fillStyle = '#00ccff';
  mCtx.beginPath();
  mCtx.arc(cx, cy, M.playerDotRadius, 0, TWO_PI);
  mCtx.fill();

  _mmDir.set(1, 0, 0).applyQuaternion(playerPlane.quaternion);
  mCtx.strokeStyle = '#00ccff';
  mCtx.lineWidth = 1.5;
  mCtx.beginPath();
  mCtx.moveTo(cx, cy);
  mCtx.lineTo(cx + _mmDir.x * M.dirLineLength, cy + _mmDir.z * M.dirLineLength);
  mCtx.stroke();
}

function drawBorder(): void {
  mCtx.strokeStyle = 'rgba(0,255,255,0.3)';
  mCtx.lineWidth = 1;
  mCtx.beginPath();
  mCtx.arc(M.center, M.center, M.borderRadius, 0, TWO_PI);
  mCtx.stroke();
}

export function drawMinimap(playerPlane: TransformNode): void {
  mCtx.clearRect(0, 0, M.size, M.size);
  const cx = M.center,
    cy = M.center;
  const px = playerPlane.position.x,
    pz = playerPlane.position.z;

  if (state.flightModel === 'exploration') {
    drawExplorationMinimap(cx, cy, px, pz, playerPlane);
  } else {
    drawCombatMinimap(cx, cy, px, pz, playerPlane);
  }

  drawBorder();
}

function drawExplorationMinimap(
  cx: number,
  cy: number,
  px: number,
  pz: number,
  playerPlane: TransformNode,
): void {
  const scale = EXPLORATION_SCALE;

  // Star at center of system (0,0)
  const sx = cx + (0 - px) * scale;
  const sy = cy + (0 - pz) * scale;
  if (sx > M.padding && sx < M.size - M.padding && sy > M.padding && sy < M.size - M.padding) {
    mCtx.fillStyle = '#ffcc00';
    mCtx.beginPath();
    mCtx.arc(sx, sy, 3, 0, TWO_PI);
    mCtx.fill();
  }

  // Planets
  mCtx.fillStyle = '#aaaaff';
  for (const mesh of planetMeshes) {
    const ex = cx + (mesh.position.x - px) * scale;
    const ey = cy + (mesh.position.z - pz) * scale;
    if (ex > M.padding && ex < M.size - M.padding && ey > M.padding && ey < M.size - M.padding) {
      mCtx.beginPath();
      mCtx.arc(ex, ey, M.dotRadius + 1, 0, TWO_PI);
      mCtx.fill();
    }
  }

  // Player
  drawPlayerDot(cx, cy, playerPlane);
}

function drawCombatMinimap(
  cx: number,
  cy: number,
  px: number,
  pz: number,
  playerPlane: TransformNode,
): void {
  const scale = M.scale;

  drawPlayerDot(cx, cy, playerPlane);

  const fighters = queryAllFighters();
  for (const f of fighters) {
    mCtx.fillStyle = f.team.team === 'ally' ? '#00ff66' : '#ff2200';
    const fx = cx + (f.transform.position.x - px) * scale;
    const fy = cy + (f.transform.position.z - pz) * scale;
    if (fx > M.padding && fx < M.size - M.padding && fy > M.padding && fy < M.size - M.padding) {
      mCtx.beginPath();
      mCtx.arc(fx, fy, M.dotRadius, 0, TWO_PI);
      mCtx.fill();
    }
  }

  mCtx.fillStyle = '#ff8800';
  for (const cs of queryAliveCapitalShips()) {
    const ex = cx + (cs.transform.position.x - px) * scale;
    const ey = cy + (cs.transform.position.z - pz) * scale;
    if (ex > M.padding && ex < M.size - M.padding && ey > M.padding && ey < M.size - M.padding) {
      mCtx.fillRect(
        ex - M.capitalShipMarkerSize,
        ey - M.capitalShipMarkerSize,
        M.capitalShipMarkerSize * 2,
        M.capitalShipMarkerSize * 2,
      );
    }
  }
}
