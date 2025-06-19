import { createButton } from '../buttonSprites/buttonTemp.js';
export class HoleFailed extends Phaser.Scene {
    constructor() {
        super('HoleFailed');
    }


    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.text(400, 300, 'You Failed! Avoid the Spikes!', {
            fontFamily: 'Arial Black',
            fontSize: 32,
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        createButton(this, 400, 400, 'Retry Hole', 'buttonImage', () => {
            const currentHole = this.registry.get('currentHole') ?? 1;
            this.scene.start('Game', { holeNumber: currentHole});
        });
    }
}
