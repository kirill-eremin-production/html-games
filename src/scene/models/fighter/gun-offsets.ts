import { Vector3 } from '../../../core';

// Muzzle positions in local fighter space (front tip of each weapon pod), scaled 1.5×
// Pod center: (0.2, -0.25, ±2.0), pod length 1.8 along X → tip at x = 1.1, then ×1.5
export const GUN_OFFSET_R = new Vector3(1.65, -0.375, 3.0);
export const GUN_OFFSET_L = new Vector3(1.65, -0.375, -3.0);
