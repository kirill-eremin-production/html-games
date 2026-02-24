import {
  type EngineMesh,
  type TransformNode,
  createMesh,
  createPlaneGeometry,
  createTransformNode,
  createUnlitMaterial,
} from '@/shared/core';

const healthBarBgGeo = createPlaneGeometry(4, 0.4);
const healthBarBgMat = createUnlitMaterial({ color: 0x220000, side: 2 });

export function addHealthBar(
  group: TransformNode,
  color: number,
): { bar: TransformNode; fill: EngineMesh } {
  const barGroup = createTransformNode();
  const bg = createMesh(healthBarBgGeo, healthBarBgMat);
  bg.parent = barGroup;
  const fg = createMesh(createPlaneGeometry(4, 0.4), createUnlitMaterial({ color, side: 2 }));
  fg.name = 'healthFill';
  fg.parent = barGroup;
  barGroup.position.y = 3;
  barGroup.parent = group;
  return { bar: barGroup, fill: fg };
}
