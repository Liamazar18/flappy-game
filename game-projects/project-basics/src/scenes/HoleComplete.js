import { createButton } from "../buttonSprites/buttonTemp.js";
export class HoleComplete extends Phaser.Scene {
    constructor() {
        super('HoleComplete');
    }

    create(data) {
        this.score = this.registry.get('score') || 0;;
        this.holeNumber = (this.registry.get('currentHole') || 2) - 1;
        this.background1 = this.add.image(0, 0, 'background').setOrigin(0);

        this.add.text(this.scale.width * 0.5, this.scale.height * 0.5, 'You Completed Hole ' + this.holeNumber, {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);


        this.add.text(400, 400, 'You Reached the Hole in ' + this.score + ' Shots ', {
            fontFamily: 'Arial Black', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(.5);


        createButton(this, 400, 500, 'Next Hole', 'buttonImage', () => {
            if (this.holeNumber >= 3) {
                this.scene.start('GameOver'); // If the player has completed all holes, go to GameOver
                return;
            }
            this.registry.set('score', 0); // Reset the score for the next hole
            this.scene.start('FirstHole'); // Start the next hole scene
        });

    }
}
