import * as THREE from 'three';
import { SUBSYSTEM_HP } from '../../../constants';
import type { Subsystem } from '../../../types';
import { buildHull } from './hull';
import { buildBridge, buildComms, buildEngines, buildHangar, buildTurrets } from './subsystems';

export function createCapitalShip(index: number, hullColor?: number): THREE.Group {
  const group = new THREE.Group();
  const { group: hullGroup, glowMat } = buildHull(hullColor ?? 0x667788);
  group.add(hullGroup);

  // Order MUST stay: Engines[0], Bridge[1], Turrets[2], Comms[3], Hangar[4]
  const builders = [
    { name: 'Двигатели', build: () => buildEngines(glowMat) },
    { name: 'Мостик', build: () => buildBridge() },
    { name: 'Турели', build: () => buildTurrets() },
    { name: 'Связь', build: () => buildComms() },
    { name: 'Ангар', build: () => buildHangar() },
  ];

  const subsystems: Subsystem[] = builders.map(({ name, build }) => {
    const result = build();
    group.add(result.group);
    return {
      name,
      mesh: result.group,
      health: SUBSYSTEM_HP,
      maxHealth: SUBSYSTEM_HP,
      center: result.center,
      radius: result.radius,
    };
  });

  // Scale subsystem hit radii to match visual scale
  for (const sub of subsystems) {
    sub.radius *= 1.5;
  }

  group.userData.subsystems = subsystems;
  group.userData.index = index;
  group.scale.setScalar(1.5);
  return group;
}
