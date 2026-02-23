import { type ProjectionCamera, Vector3, vec3Project } from '../core';

const _projVec = new Vector3();

/** Projects a world position to screen pixel coordinates.
 *  z < 1 means the point is in front of the camera. */
export function worldToScreen(
  worldPos: Vector3,
  cam: ProjectionCamera,
  screenW: number,
  screenH: number,
): { x: number; y: number; z: number } {
  return vec3Project(worldPos, cam, screenW, screenH, _projVec);
}

/** Clamps a screen-space position to the visible screen edge.
 *  Handles behind-camera by flipping direction. */
export function clampToScreenEdge(
  screenX: number,
  screenY: number,
  screenW: number,
  screenH: number,
  isBehindCamera: boolean,
  margin: number,
): { x: number; y: number } {
  const cx = screenW / 2;
  const cy = screenH / 2;
  let dx = screenX - cx;
  let dy = screenY - cy;
  if (isBehindCamera) {
    dx = -dx;
    dy = -dy;
  }
  const edgeX = cx - margin;
  const edgeY = cy - margin;
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);
  if (absDx < 0.001 && absDy < 0.001) {
    return { x: cx, y: margin };
  }
  const scaleX = absDx > 0.001 ? edgeX / absDx : Infinity;
  const scaleY = absDy > 0.001 ? edgeY / absDy : Infinity;
  const s = Math.min(scaleX, scaleY);
  return { x: cx + dx * s, y: cy + dy * s };
}

/** Returns true if the point is within the visible screen area (with margin). */
export function isOnScreen(x: number, y: number, w: number, h: number, margin: number): boolean {
  return x > margin && x < w - margin && y > margin && y < h - margin;
}

/** Formats a distance value as "123м" or "1.5км". */
export function formatDistance(dist: number): string {
  return dist < 1000 ? Math.floor(dist) + '\u043C' : (dist / 1000).toFixed(1) + '\u043A\u043C';
}
