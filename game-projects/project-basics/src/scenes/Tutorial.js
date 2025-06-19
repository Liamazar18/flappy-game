import { createButton } from '../buttonSprites/buttonTemp.js';
export class Tutorial extends Phaser.Scene {
    constructor() {
        super('Tutorial');
    }


    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);



        this.add.text(400, 75, 'HOW TO PLAY', {
            fontFamily: 'Arial Black',
            fontSize: 64,
            color: '#A40000',
            stroke: '#000000',
            strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        this.add.text(400, 175, 'TO START HOLE: Left Click', {
            fontFamily: 'Arial Black',
            fontSize: 32,
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        this.add.text(400, 250, 'MOVEMENT:', {
            fontFamily: 'Arial Black',
            fontSize: 40,
            color: '#A40000',
            stroke: '#000000',
            strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        this.add.text(400, 300, 'Press Left/Right Arrow Key to Fly Left/Right', {
            fontFamily: 'Arial Black',
            fontSize: 32,
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.add.text(400, 375, 'GOAL:', {
            fontFamily: 'Arial Black',
            fontSize: 40,
            color: '#A40000',
            stroke: '#000000',
            strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        this.add.text(400, 425, 'Try and get the ball in the hole in as', {
            fontFamily: 'Arial Black',
            fontSize: 32,
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        this.add.text(400, 475, 'few strokes as possible', {
            fontFamily: 'Arial Black',
            fontSize: 32,
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        

        const startButton = createButton(this, 400, 550, 'Start Game', 'buttonImage', () => {
                    this.scene.start('Game');
                });
                this.add.existing(startButton);
    }
}
