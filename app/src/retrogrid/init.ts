/// <reference path="../../../typings/tsd.d.ts" />

import * as states from './states';


export function init () {
  const game = new Phaser.Game(640, 480, Phaser.AUTO);

  // Dynamically add all required game states.
  Object.keys(states).forEach((key) => game.state.add(key, states[key]));

  game.state.start('Boot');

  return game;
}