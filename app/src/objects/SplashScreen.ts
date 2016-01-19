/// <reference path="../../../typings/tsd.d.ts" />

/*
 * SplashScreen
 * ============================================================================
 *
 * Shows a busy, decorated image, containing a widget displaying the resource
 * loading progress rate.
 */


class SplashScreen extends Phaser.Group {
  progressBar: any;
  constructor (game: Phaser.Game) {
    super(game);

    this.classType = Phaser.Image;

    this.create(0, 0, 'splash-screen');
    this.progressBar = this.create(82, 282, 'progress-bar');
  }

}


export default SplashScreen;