function preload() {
    song = loadSound('song.mp3');
}

function mouseClicked() {
    if (song.isPlaying()) {
        song.pause()
    } else {
        song.play()
    }
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
    background(0);
    //line Drum
    colorMode(HSB, 100);
    strokeWeight(5);
    let drumMap = map(drum, 0, 100, 30, 90);
    let lineLeft = 10;
    let lineRight = 50;
    for (let i = 0; i <= drumMap; i++) {
        let lineStep = i * 10;
        line(lineLeft, lineStep, lineRight, lineStep);
        stroke(drum, 80, 80);
    }
    colorMode(HSB, 100);
    strokeWeight(5);
    for (let i = 1; i <= drumMap; i++) {
        let lineStep = i * 10;
        line(lineLeft + 475, lineStep, lineRight + 475, lineStep);
        stroke(drum, 80, 80);
    }

    //line Bass
    colorMode(HSB, 100);
    strokeWeight(5);
    let bassMap = map(bass, 0, 100, 30, 90);
    for (let i = 1; i <= bassMap; i++) {
        let lineStep = i * 10;
        line(lineLeft + 50, lineStep, lineRight + 50, lineStep);
        stroke(bass, 80, 80);
    }
    colorMode(HSB, 100);
    strokeWeight(5);
    for (let i = 1; i <= bassMap; i++) {
        let lineStep = i * 10;
        line(lineLeft + 425, lineStep, lineRight + 425, lineStep);
        stroke(bass, 80, 80);
    }

    //line Other
    colorMode(HSB, 100);
    strokeWeight(5);
    let otherMap = map(other, 0, 100, 30, 90);
    for (let i = 1; i <= otherMap; i++) {
        let lineStep = i * 10;
        line(lineLeft + 100, lineStep, lineRight + 100, lineStep);
        stroke(other, 80, 80);
    }
    colorMode(HSB, 100);
    strokeWeight(5);
    for (let i = 1; i <= otherMap; i++) {
        let lineStep = i * 10;
        line(lineLeft + 375, lineStep, lineRight + 375, lineStep);
        stroke(other, 80, 80);
    }

    //The Yellow Oval. bass
    let oval_Down = map(bass, 0, 100, 200, 550, true);
    fill(255, 255, 0);
    ellipse(width / 2, 950, oval_Down, oval_Down);

    //The White Oval. Vocal
    noStroke();
    let ovalPlace = map(vocal, 0, 100, 500, 200, true);
    let ovalSize = map(vocal, 0, 100, 60, 150, true);
    fill(225);
    ellipse(width / 2, ovalPlace, ovalSize);
}