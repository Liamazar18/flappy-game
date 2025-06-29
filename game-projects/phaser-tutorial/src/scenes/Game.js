import { Player } from '../gameObjects/Player.js';
export class Game extends Phaser.Scene {
    constructor() {
        super('Game');

        
    }

    create() {
        this.add.image(400, 300, 'sky');

        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');

        this.player = new Player(this, 100, 450);

        this.physics.add.collider(this.player, this.platforms);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        this.stars.children.iterate(child =>
        {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });

        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
    }

    update() {
        if (this.cursors.left.isDown)
        {
            this.player.moveLeft();
        }
        else if (this.cursors.right.isDown)
        {
            this.player.moveRight();
        }
        else
        {
            this.player.idle();
        }
        if (this.cursors.up.isDown)
        {
            this.player.jump();
        }
    }

    collectStar(player, star)
    {
        star.disableBody(true, true);
    }


}
