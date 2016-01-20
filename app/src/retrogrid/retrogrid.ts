/// <reference path="../../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

import {Phaser} from 'phaser';

import * as states from './states';
import * as init from './init';


@Component({
    selector: 'retrogrid',
    templateUrl: 'src/retrogrid/retrogrid.html',
    directives: [MATERIAL_DIRECTIVES]
})

export class Retrogrid  {
    // game: Phaser.Game;
    textValue: Phaser.Text;
    updateCount: number;
    message: any;
    
    constructor(){
           init();
    }
 
    //     super(800, 600, Phaser.AUTO, 'content', { create: this.create });
    //     //         this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create });
    //     // var text = "Hello World!";
    //     // var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
    //     // this.game.add.text(0, 0, text, style);
    //     this.message = 'hello...';
    // }
    
    // create() {
    //     // this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create });
    //     var text = "Hello World!...";
    //     var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
    //     this.game.add.text(0, 0, text, style);
    // }


}
