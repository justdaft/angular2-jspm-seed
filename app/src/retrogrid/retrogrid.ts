/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

import {} from 'phaser';

@Component({
  selector: 'retrogrid',
  templateUrl: 'src/retrogrid/retrogrid.html',
  directives: [MATERIAL_DIRECTIVES]
})

export class Retrogrid {
  game: Phaser.Game;
  constructor() {
      this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
          create: this.create,
          preload: this.preload
      }); 
  }
  
  preload(){
      
  };
  
   create(){
       
   };
}
