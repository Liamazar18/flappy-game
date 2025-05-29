/*
* Asset from: https://kenney.nl/assets/pixel-platformer
*
*/
import ASSETS from '../assets.js';
import ANIMATION from '../animation.js';

export class Game extends Phaser.Scene {
    constructor() {
        super('Game');
        this.gameStarted = false;
        this.flyVelocityY = -300;
        this.flyVelocityXleft = -300;
        this.flyVelocityXright = 300;
        this.score = 0;

        this.distance = 0;
    

        this.distanceMax = 200;

        
        
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys();

        this.cameras.main.setBackgroundColor(0x00ff00);

        this.background1 = this.add.image(0, 0, 'background').setOrigin(0);
        this.background2 = this.add.image(this.background1.width, 0, 'background').setOrigin(0);


        this.hole = this.physics.add.staticGroup();

        this.hole.create(400, 400, 'hole').setScale(.125);


            // testing testing testing

        // Create score text
        this.scoreText = this.add.text(250, 50, 'Score: 0', {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        })
            .setOrigin(0.5)
            .setDepth(100);

        this.initAnimations();
        this.initPlayer();
        this.initInput();
        this.initPhysics();
        this.movement();
        this.physics.add.collider(this.player, this.hole);


        
    }

    update() {
       

        if (!this.gameStarted) return;
    }

    initAnimations() {
        this.anims.create({
            key: ANIMATION.bat.key,
            frames: this.anims.generateFrameNumbers(ANIMATION.bat.texture),
            frameRate: ANIMATION.bat.frameRate,
            repeat: ANIMATION.bat.repeat
        });
        this.anims.create({
            key: ANIMATION.coin.key,
            frames: this.anims.generateFrameNumbers(ANIMATION.coin.texture),
            frameRate: ANIMATION.coin.frameRate,
            repeat: ANIMATION.coin.repeat
        });
    }

    initPhysics() {
        this.obstacleGroup = this.add.group();
        this.coinGroup = this.add.group();


        //this.physics.add.overlap(this.player, this.hole, this.hitObstacle, null, this);
        this.physics.world.setBounds(0, 0, 800, 600);
    }

    initPlayer() {
        this.player = this.physics.add.sprite(200, this.centreY, ASSETS.spritesheet.bat.key)
            .setDepth(100)
            .setCollideWorldBounds(true);
        this.player.anims.play(ANIMATION.bat.key, true);
    }

    initInput() {
        this.physics.pause();
        this.input.once('pointerdown', () => {
            this.startGame();
        });
    }

    startGame() {
        this.gameStarted = true;
        this.physics.resume();
    }


    movement() {
        this.input.keyboard.on('keydown-RIGHT', () => {
            this.flyRight();
            console.log(this.player);
            this.score++;
            this.scoreText.setText(`Score: ${this.score}`);
        });

        this.input.keyboard.on('keydown-LEFT', () => {
            this.flyLeft();
            console.log(this.player);
            this.score++;
            this.scoreText.setText(`Score: ${this.score}`);
        });
    }

    flyRight() {
        console.log(this.flyVelocityXright);
        this.player.setVelocityY(this.flyVelocityY);
        this.player.setVelocityX(this.flyVelocityXright);
    }

    flyLeft() {
        this.player.setVelocityY(this.flyVelocityY);
        this.player.setVelocityX(this.flyVelocityXleft);
    }
    

    hitObstacle(player, obstacle) {
        this.gameStarted = false;
        this.physics.pause();

        this.tweens.add({
            targets: this.player,
            scale: 2,
            alpha: 0,
            duration: 1000,
            ease: Phaser.Math.Easing.Expo.Out
        });

        this.GameOver();
    }

    GameOver() {
        this.time.delayedCall(2000, () => {
            this.scene.start('GameOver');
        });
    }
}





//alternate form of movement for the player using cursors

//if (this.cursors.left.isDown) {
//    this.flyLeft();
//} else if (this.cursors.right.isDown) {
//    this.flyRight();
//} else {
//    this.player.setVelocityX(0);
//}

//if (this.cursors.up.isDown && this.gameStarted) {
//    this.player.setVelocityY(this.flyVelocityY);
//}