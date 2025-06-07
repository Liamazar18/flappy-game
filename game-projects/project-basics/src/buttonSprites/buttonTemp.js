export function createButton(scene, x, y, label, imageKey, callback) {
    const container = scene.add.container(x, y);

    const buttonImage = scene.add.image(0, 0, imageKey).setOrigin(0.5);
    const buttonText = scene.add.text(0, 0, label, {
        fontSize: '24px',
        color: '#ffffff',
        fontFamily: 'Arial',
    }).setOrigin(0.5);

    container.add([buttonImage, buttonText]);

    // Set size and interactivity
    buttonImage.setInteractive({ useHandCursor: true });

    buttonImage.on('pointerdown', () => {
        console.log('button clicked');
        callback();
    });

    return container;
}
