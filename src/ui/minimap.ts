import * as THREE from 'three';
import { state } from '../state';

const minimapCanvas = document.getElementById('minimap-canvas') as HTMLCanvasElement;
const mCtx = minimapCanvas.getContext('2d')!;
const _mmDir = new THREE.Vector3();
const TWO_PI = Math.PI * 2;

export function drawMinimap(playerPlane: THREE.Group): void {
  mCtx.clearRect(0, 0, 180, 180);
  const cx = 90,
    cy = 90,
    scale = 0.025;
  const px = playerPlane.position.x,
    pz = playerPlane.position.z;

  mCtx.fillStyle = '#00ccff';
  mCtx.beginPath();
  mCtx.arc(cx, cy, 4, 0, TWO_PI);
  mCtx.fill();

  _mmDir.set(1, 0, 0).applyQuaternion(playerPlane.quaternion);
  mCtx.strokeStyle = '#00ccff';
  mCtx.lineWidth = 1.5;
  mCtx.beginPath();
  mCtx.moveTo(cx, cy);
  mCtx.lineTo(cx + _mmDir.x * 15, cy + _mmDir.z * 15);
  mCtx.stroke();

  mCtx.fillStyle = '#00ff66';
  for (const a of state.allies) {
    const ex = cx + (a.mesh.position.x - px) * scale;
    const ey = cy + (a.mesh.position.z - pz) * scale;
    if (ex > 3 && ex < 177 && ey > 3 && ey < 177) {
      mCtx.beginPath();
      mCtx.arc(ex, ey, 2, 0, TWO_PI);
      mCtx.fill();
    }
  }

  mCtx.fillStyle = '#ff2200';
  for (const e of state.enemies) {
    const ex = cx + (e.mesh.position.x - px) * scale;
    const ey = cy + (e.mesh.position.z - pz) * scale;
    if (ex > 3 && ex < 177 && ey > 3 && ey < 177) {
      mCtx.beginPath();
      mCtx.arc(ex, ey, 2, 0, TWO_PI);
      mCtx.fill();
    }
  }

  mCtx.fillStyle = '#ff8800';
  for (const cs of state.capitalShips) {
    if (!cs.alive) continue;
    const ex = cx + (cs.mesh.position.x - px) * scale;
    const ey = cy + (cs.mesh.position.z - pz) * scale;
    if (ex > 3 && ex < 177 && ey > 3 && ey < 177) {
      mCtx.fillRect(ex - 4, ey - 4, 8, 8);
    }
  }

  mCtx.strokeStyle = 'rgba(0,255,255,0.3)';
  mCtx.lineWidth = 1;
  mCtx.beginPath();
  mCtx.arc(90, 90, 88, 0, TWO_PI);
  mCtx.stroke();
}
