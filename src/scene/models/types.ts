import * as THREE from 'three';

export interface SubsystemBuildResult {
  group: THREE.Group;
  center: THREE.Vector3;
  radius: number;
}
