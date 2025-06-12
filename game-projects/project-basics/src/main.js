import { Boot } from './scenes/Boot.js';
import { FirstHole } from './scenes/FirstHole.js';
import { HoleComplete } from './scenes/HoleComplete.js';
import { Home } from './scenes/Home.js';
import { GameOver } from './scenes/GameOver.js';
import { Leaderboard } from './scenes/Leaderboard.js';
import { Tutorial } from './scenes/Tutorial.js';
//import { TestHole } from './scenes/testHole.js';
import { Preloader } from './scenes/Preloader.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#028af8',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 400 }
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        Preloader,
        Home,
        FirstHole,
        HoleComplete,
        Leaderboard,
        Tutorial,
        GameOver
        //TestHole
    ]
};

new Phaser.Game(config);
