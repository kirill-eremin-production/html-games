import { Clock, type TransformNode } from '@/shared/core';

export const clock = new Clock();
export const pauseScreen = document.getElementById('pause-screen')! as HTMLElement;

export const refs = {
  paused: false,
  playerModel: null as TransformNode | null,
};
