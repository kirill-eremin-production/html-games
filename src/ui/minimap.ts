import * as THREE from 'three';
import { state } from '../state';

const minimapCanvas = document.getElementById('minimap-canvas') as HTMLCanvasElement;
const mCtx = minimapCanvas.getContext('2d')!;

export function drawMinimap(playerPlane: THREE.Group): void {
  mCtx.clearRect(0, 0, 180, 180);
  const cx = 90,
    cy = 90,
    scale = 0.025;

  mCtx.fillStyle = '#00ccff';
  mCtx.beginPath();
  mCtx.arc(cx, cy, 4, 0, Math.PI * 2);
  mCtx.fill();

  const dir = new THREE.Vector3(1, 0, 0).applyQuaternion(playerPlane.quaternion);
  mCtx.strokeStyle = '#00ccff';
  mCtx.lineWidth = 1.5;
  mCtx.beginPath();
  mCtx.moveTo(cx, cy);
  mCtx.lineTo(cx + dir.x * 15, cy + dir.z * 15);
  mCtx.stroke();

  for (const a of state.allies) {
    const dx = (a.mesh.position.x - playerPlane.position.x) * scale;
    const dz = (a.mesh.position.z - playerPlane.position.z) * scale;
    const ex = cx + dx,
      ey = cy + dz;
    if (ex > 3 && ex < 177 && ey > 3 && ey < 177) {
      mCtx.fillStyle = '#00ff66';
      mCtx.beginPath();
      mCtx.arc(ex, ey, 2, 0, Math.PI * 2);
      mCtx.fill();
    }
  }

  for (const e of state.enemies) {
    const dx = (e.mesh.position.x - playerPlane.position.x) * scale;
    const dz = (e.mesh.position.z - playerPlane.position.z) * scale;
    const ex = cx + dx,
      ey = cy + dz;
    if (ex > 3 && ex < 177 && ey > 3 && ey < 177) {
      mCtx.fillStyle = '#ff2200';
      mCtx.beginPath();
      mCtx.arc(ex, ey, 2, 0, Math.PI * 2);
      mCtx.fill();
    }
  }

  for (const cs of state.capitalShips) {
    if (!cs.alive) continue;
    const dx = (cs.mesh.position.x - playerPlane.position.x) * scale;
    const dz = (cs.mesh.position.z - playerPlane.position.z) * scale;
    const ex = cx + dx,
      ey = cy + dz;
    if (ex > 3 && ex < 177 && ey > 3 && ey < 177) {
      mCtx.fillStyle = '#ff8800';
      mCtx.fillRect(ex - 4, ey - 4, 8, 8);
    }
  }

  mCtx.strokeStyle = 'rgba(0,255,255,0.3)';
  mCtx.lineWidth = 1;
  mCtx.beginPath();
  mCtx.arc(90, 90, 88, 0, Math.PI * 2);
  mCtx.stroke();
}
