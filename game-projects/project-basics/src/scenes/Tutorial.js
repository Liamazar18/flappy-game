export class Tutorial extends Phaser.Scene {
    constructor() {
        super('Tutorial');
    }


    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);
    }
}
