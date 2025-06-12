import { createButton } from '../buttonSprites/buttonTemp.js';
export class Home extends Phaser.Scene {
    constructor() {
        super('Home');
    }


    create() {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.
        this.registry.set('score', 0); // ✅ This resets it globally
        this.registry.set('currentHole', 1); // Set the current hole to 1
        this.registry.set('totalScore', 0); // Reset the total strokes globally
        this.registry.set('holeScores', []); // Reset the hole scores globally
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.text(400, 100, 'Welcome to Flappy Golf!', {
            fontFamily: 'Arial Black',
            fontSize: 32,
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        //  Create a button to start the game
        const startButton = createButton(this, 400, 300, 'Start Game', 'buttonImage', () => {
            this.scene.start('FirstHole');
        });
        this.add.existing(startButton);
        const tableButton = createButton(this, 400, 400, 'Leaderboard', 'buttonImage', () => {
            this.scene.start('Leaderboard');
        });
        this.add.existing(tableButton);
        const tutorialButton = createButton(this, 400, 500, 'Tutorial', 'buttonImage', () => {
            this.scene.start('Tutorial');
        });
        this.add.existing(tutorialButton);
        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        //this.scene.start('Game');
    }
}
