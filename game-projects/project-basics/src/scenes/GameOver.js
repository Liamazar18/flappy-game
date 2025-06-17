import { createButton } from "../buttonSprites/buttonTemp.js";
export class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    create(data) {
        this.totalScore = this.registry.get('totalScore') || 0;;
        this.background1 = this.add.image(0, 0, 'background').setOrigin(0);

        this.add.text(this.scale.width * 0.5, this.scale.height * 0.5, 'You Completed the Course!!', {
            fontFamily: 'Arial Black', fontSize: 50, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);


        this.add.text(400, 400, 'You Finished with ' + this.totalScore + ' Total Shots ', {
            fontFamily: 'Arial Black', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(.5);


        createButton(this, 400, 500, 'Back to Home', 'buttonImage', () => {
            this.scene.start('Home');
        });

        $('#nameModal').modal('show');
        let finalScore = this.totalScore;

        let modalButton = document.getElementById("modalButton");
        modalButton.addEventListener("click", function() {
            let  playerName = document.getElementById("player-name");
            
            
            if (playerName.value === "") {
                alert("Please enter your name");
            } else {
                
                $('#nameModal').modal('hide');
                
                let scoreName = playerName.value;
                $.get("http://localhost:8080/phaser/game-projects/project-basics/server.php?name=" + scoreName + "&score=" + finalScore);
            }
        });


        
        
        
        //$.get("https://localhost:8080/phaser/game-projects/project-basics/server.php?name=" + name3 + "&score=" + score);




        /*
        const element = this.add.dom(400, 0).createFromCache('nameform');
        element.addListener('click');
        element.on('click', function (event)
        {
            if (event.target.name === 'playButton')
            {
                const inputText = this.getChildByName('nameField');

                //  Have they entered anything?
                if (inputText.value !== '')
                {
                    //  Turn off the click events
                    this.removeListener('click');

                    //  Hide the login element
                    this.setVisible(false);

                    //  Populate the text with whatever they typed in
                    $name = inputText.value;
                    $score = totalScore;

                    $.get("https://localhost:8080/phaser/game-projects/project-basics/server.php?name=" + $name + "&score=" + $score);
                }
                else
                {
                    //  Flash the prompt
                    this.scene.tweens.add({
                        targets: text,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true
                    });
                }
            }
        });
        
        */

    }
}
