import { HOLELAYOUTS } from "./holeData.js";

export function loadHole(scene, holeNumber) {
    //scene.platforms.clear(true, true);
    //scene.hole.clear(true, true);

    const layout = HOLELAYOUTS[holeNumber - 1];

    layout.platforms.forEach(platform => {
        scene.platforms.create(platform.x, platform.y, 'ground').setScale(platform.scale).refreshBody();
    });

    scene.hole.create(layout.hole.x, layout.hole.y, 'hole').setScale(layout.hole.scale).refreshBody();

    scene.player.setPosition(layout.player.x, layout.player.y);
    scene.player.setVelocity(0, 0);
}