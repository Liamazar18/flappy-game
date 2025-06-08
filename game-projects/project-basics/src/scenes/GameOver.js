import { createButton } from "../buttonSprites/buttonTemp.js";
export class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    create(data) {
        this.score = this.registry.get('score') || 0;;
        this.background1 = this.add.image(0, 0, 'background').setOrigin(0);

        this.add.text(this.scale.width * 0.5, this.scale.height * 0.5, 'You Won!!', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);


        this.add.text(400, 400, 'You Reached the Hole in ' + this.score + ' Shots ', {
            fontFamily: 'Arial Black', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(.5);


        createButton(this, 400, 500, 'Back', 'buttonImage', () => {
            this.scene.start('Home');
        });

    }
}
