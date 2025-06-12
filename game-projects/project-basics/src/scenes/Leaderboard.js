export class Leaderboard extends Phaser.Scene {
    constructor() {
        super('Leaderboard');
    }


    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);
    }
}
