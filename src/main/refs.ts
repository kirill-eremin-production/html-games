import * as THREE from 'three';

export const clock = new THREE.Clock();
export const pauseScreen = document.getElementById('pause-screen')! as HTMLElement;

export const refs = {
  paused: false,
  playerModel: null as THREE.Group | null,
  hudFrameCounter: 0,
  lastFrameTime: 0,
  explorationTime: 0,
};
