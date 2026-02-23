import { UI_CONFIG } from '../config/ui';
import { TransformNode, Vector3 } from '@/shared/core';
import { state } from '@/shared/state';

const M = UI_CONFIG.minimap;
const minimapCanvas = document.getElementById('minimap-canvas') as HTMLCanvasElement;
const mCtx = minimapCanvas.getContext('2d')!;
const _mmDir = new Vector3();
const TWO_PI = Math.PI * 2;

export function drawMinimap(playerPlane: TransformNode): void {
  mCtx.clearRect(0, 0, M.size, M.size);
  const cx = M.center,
    cy = M.center,
    scale = M.scale;
  const px = playerPlane.position.x,
    pz = playerPlane.position.z;

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

  mCtx.fillStyle = '#00ff66';
  for (const a of state.allies) {
    const ex = cx + (a.mesh.position.x - px) * scale;
    const ey = cy + (a.mesh.position.z - pz) * scale;
    if (ex > M.padding && ex < M.size - M.padding && ey > M.padding && ey < M.size - M.padding) {
      mCtx.beginPath();
      mCtx.arc(ex, ey, M.dotRadius, 0, TWO_PI);
      mCtx.fill();
    }
  }

  mCtx.fillStyle = '#ff2200';
  for (const e of state.enemies) {
    const ex = cx + (e.mesh.position.x - px) * scale;
    const ey = cy + (e.mesh.position.z - pz) * scale;
    if (ex > M.padding && ex < M.size - M.padding && ey > M.padding && ey < M.size - M.padding) {
      mCtx.beginPath();
      mCtx.arc(ex, ey, M.dotRadius, 0, TWO_PI);
      mCtx.fill();
    }
  }

  mCtx.fillStyle = '#ff8800';
  for (const cs of state.capitalShips) {
    if (!cs.alive) continue;
    const ex = cx + (cs.mesh.position.x - px) * scale;
    const ey = cy + (cs.mesh.position.z - pz) * scale;
    if (ex > M.padding && ex < M.size - M.padding && ey > M.padding && ey < M.size - M.padding) {
      mCtx.fillRect(
        ex - M.capitalShipMarkerSize,
        ey - M.capitalShipMarkerSize,
        M.capitalShipMarkerSize * 2,
        M.capitalShipMarkerSize * 2,
      );
    }
  }

  mCtx.strokeStyle = 'rgba(0,255,255,0.3)';
  mCtx.lineWidth = 1;
  mCtx.beginPath();
  mCtx.arc(M.center, M.center, M.borderRadius, 0, TWO_PI);
  mCtx.stroke();
}
