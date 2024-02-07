function draw_one_frame(words, vocal, drum, bass, other, counter) {

    background(0);
    angleMode(DEGREES);

    let backgroundColour = map(counter, 2, 6, 255, 0);
    background(backgroundColour);

    //The Oval. Vocal
    let oval_Down = map(vocal, 0, 100, 100, 300);
    fill(0);
    noStroke();
    ellipse(width / 2, height / 2, oval_Down, oval_Down);

    //Change colour of the ellipse
    if (counter > 6.5) {
        fill(255, 255, 0); //Yellow
        ellipse(width / 2, height / 2, oval_Down, oval_Down);
    }



    if (counter > 24) {

        let size = map(bass, 0, 100, 20, 50);
        let ellipse_X = [80, 220, 340, 460, 470, 500, 50, 100, 450, 240, 150, 360];
        let ellipse_Y = [80, 190, 250, 100, 300, 600, 490, 320, 700, 670, 640, 820, 810];

        fill(255, 255, 220);
        ellipse(ellipse_X[0], ellipse_Y[0], size);
        ellipse(ellipse_X[1], ellipse_Y[1], size);
        ellipse(ellipse_X[2], ellipse_Y[2], size);
        ellipse(ellipse_X[3], ellipse_Y[3], size);
        ellipse(ellipse_X[4], ellipse_Y[4], size);
        ellipse(ellipse_X[5], ellipse_Y[5], size);
        ellipse(ellipse_X[6], ellipse_Y[6], size);
        ellipse(ellipse_X[7], ellipse_Y[7], size);
        ellipse(ellipse_X[8], ellipse_Y[8], size);
        ellipse(ellipse_X[9], ellipse_Y[9], size);
        ellipse(ellipse_X[7], ellipse_Y[10], size);
        ellipse(ellipse_X[10], ellipse_Y[11], size);
        ellipse(ellipse_X[11], ellipse_Y[12], size);

    }

    if (counter > 24) {

        let smallSize = 15;
        let ellipse_X = [80, 220, 340, 460, 470, 500, 50, 100, 450, 240, 150, 360];
        let ellipse_Y = [80, 190, 250, 100, 300, 600, 490, 320, 700, 670, 640, 820, 810];
        noStroke();
        fill(255, 255, 0);
        ellipse(ellipse_X[0], ellipse_Y[0], smallSize);
        ellipse(ellipse_X[1], ellipse_Y[1], smallSize);
        ellipse(ellipse_X[2], ellipse_Y[2], smallSize);
        ellipse(ellipse_X[3], ellipse_Y[3], smallSize);
        ellipse(ellipse_X[4], ellipse_Y[4], smallSize);
        ellipse(ellipse_X[5], ellipse_Y[5], smallSize);
        ellipse(ellipse_X[6], ellipse_Y[6], smallSize);
        ellipse(ellipse_X[7], ellipse_Y[7], smallSize);
        ellipse(ellipse_X[8], ellipse_Y[8], smallSize);
        ellipse(ellipse_X[9], ellipse_Y[9], smallSize);
        ellipse(ellipse_X[7], ellipse_Y[10], smallSize);
        ellipse(ellipse_X[10], ellipse_Y[11], smallSize);
        ellipse(ellipse_X[11], ellipse_Y[12], smallSize);

    }
    //  //The White Oval. Vocal
    // noStroke();
    // let ovalPlace = map(drum, 0, 100, 70, 60);
    // let ovalSize = map(vocal, 0, 100, 15, 150);
    // fill(225);
    // ellipse(width / 2, ovalPlace, ovalSize);

    if (counter > 35.5) {
        let shaking = map(drum, 0, 100, 70, 20);
        let size = map(bass, 0, 100, 20, 50);
        let ellipse_X = [80, 220, 340, 460, 470, 500, 50, 100, 450, 240, 150, 360];
        let ellipse_Y = [80, 190, 250, 100, 300, 600, 490, 320, 700, 670, 640, 820, 810];

        fill(255, 255, 220);
        ellipse(ellipse_X[0], ellipse_Y[0], shaking, size);
        ellipse(ellipse_X[1], ellipse_Y[1], shaking, size);
        ellipse(ellipse_X[2], ellipse_Y[2], shaking, size);
        ellipse(ellipse_X[3], ellipse_Y[3], shaking, size);
        ellipse(ellipse_X[4], ellipse_Y[4], shaking, size);
        ellipse(ellipse_X[5], ellipse_Y[5], shaking, size);
        ellipse(ellipse_X[6], ellipse_Y[6], shaking, size);
        ellipse(ellipse_X[7], ellipse_Y[7], shaking, size);
        ellipse(ellipse_X[8], ellipse_Y[8], shaking, size);
        ellipse(ellipse_X[9], ellipse_Y[9], shaking, size);
        ellipse(ellipse_X[7], ellipse_Y[10], shaking, size);
        ellipse(ellipse_X[10], ellipse_Y[11], shaking, size);
        ellipse(ellipse_X[11], ellipse_Y[12], shaking, size);

    }

    if (counter > 35.5) {
        let shaking = map(drum, 0, 100, 70, 60);
        let smallSize = 15;
        let ellipse_X = [80, 220, 340, 460, 470, 500, 50, 100, 450, 240, 150, 360];
        let ellipse_Y = [80, 190, 250, 100, 300, 600, 490, 320, 700, 670, 640, 820, 810];
        noStroke();
        fill(255, 255, 0);
        ellipse(ellipse_X[0], ellipse_Y[0], shaking, smallSize);
        ellipse(ellipse_X[1], ellipse_Y[1], shaking, smallSize);
        ellipse(ellipse_X[2], ellipse_Y[2], shaking, smallSize);
        ellipse(ellipse_X[3], ellipse_Y[3], shaking, smallSize);
        ellipse(ellipse_X[4], ellipse_Y[4], shaking, smallSize);
        ellipse(ellipse_X[5], ellipse_Y[5], shaking, smallSize);
        ellipse(ellipse_X[6], ellipse_Y[6], shaking, smallSize);
        ellipse(ellipse_X[7], ellipse_Y[7], shaking, smallSize);
        ellipse(ellipse_X[8], ellipse_Y[8], shaking, smallSize);
        ellipse(ellipse_X[9], ellipse_Y[9], shaking, smallSize);
        ellipse(ellipse_X[7], ellipse_Y[10], shaking, smallSize);
        ellipse(ellipse_X[10], ellipse_Y[11], shaking, smallSize);
        ellipse(ellipse_X[11], ellipse_Y[12], shaking, smallSize);
    }

    // fill(255, 255, 0);
    // textAlign(LEFT);
    // let seconds = counter
    // textSize(60);
    // text(seconds, 20, height - 20);

    if (counter > 58 && counter < 62.5) {
    colorMode(HSB, 100);
    strokeWeight(5);
    let angle = 180;
    translate(535, 960);
    rotate(angle);

    let drumMap = map(drum, 0, 100, 0, 70);
    let lineLeft = 10;
    let lineRight = 50;
    for (let i = 0; i <= drumMap; i++) {
        let lineStep = i * 10;
        line(lineLeft, lineStep, lineRight, lineStep);
        stroke(drum, 80, 80);
    }
    for (let i = 1; i <= drumMap; i++) {
        let lineStep = i * 10;
        line(lineLeft + 475, lineStep, lineRight + 475, lineStep);
        stroke(drum, 80, 80);
    }

    //line Bass
    let bassMap = map(bass, 0, 100, 0, 70);
    for (let i = 1; i <= bassMap; i++) {
        let lineStep = i * 10;
        line(lineLeft + 50, lineStep, lineRight + 50, lineStep);
        stroke(bass, 80, 80);
    }
    for (let i = 1; i <= bassMap; i++) {
        let lineStep = i * 10;
        line(lineLeft + 425, lineStep, lineRight + 425, lineStep);
        stroke(bass, 80, 80);
    }

    //line Other
    let otherMap = map(other, 0, 100, 0, 70);
    for (let i = 1; i <= otherMap; i++) {
        let lineStep = i * 10;
        line(lineLeft + 100, lineStep, lineRight + 100, lineStep);
        stroke(other, 80, 80);
    }
    for (let i = 1; i <= otherMap; i++) {
        let lineStep = i * 10;
        line(lineLeft + 375, lineStep, lineRight + 375, lineStep);
        stroke(other, 80, 80);
    }

    //The Oval.
    let oval_Down1 = map(bass, 0, 100, 100, 300);
    fill(255, 255, 0);
    ellipse(width / 2, height / 2, oval_Down1, oval_Down1);

}
}

//     fill(255);
//     strokeWeight(5);
//     let oval_Down1 = map(vocal, 0, 100, 100, 300);
//     fill(255, 255, 0);
//     noStroke();
//     ellipse(width / 2, height / 2, oval_Down1, oval_Down1);

//     background(219, 15, 0);
//     colorMode(HSB, 100);
//     strokeWeight(5);


//     let angle = 180
//     translate(60, 960);
//     rotate(angle);

//     //Drum
//     let drumMap = map(drum, 0, 100, 0, 70);
//     let lineRight = 15;
//     let lineLeft = 50;
//     for (let i = 0; i <= drumMap; i++) {
//         let lineStep = i * 10;
//         line(lineRight, lineStep, lineLeft, lineStep);
//         stroke(drum, 80, 80);
//     }
//     for (let i = 1; i <= drumMap; i++) {
//         let lineStep = i * 10;
//         line(lineLeft + 475, lineStep, lineRight + 475, lineStep);
//         stroke(drum, 80, 80);
//     }

//     let angle1 = 0
//     translate(-475, 0);
//     rotate(angle1);

//     //Bass
//     let bassMap = map(bass, 0, 100, 0, 70);
//     for (let i = 1; i <= bassMap; i++) {
//         let lineStep = i * 10;
//         line(lineLeft + 50, lineStep, lineRight + 50, lineStep);
//         stroke(bass, 80, 80);
//     }
//     for (let i = 1; i <= bassMap; i++) {
//         let lineStep = i * 10;
//         line(lineLeft + 425, lineStep, lineRight + 425, lineStep);
//         stroke(bass, 80, 80);
//     }

//     //Other
//     let otherMap = map(other, 0, 100, 0, 70);
//     for (let i = 1; i <= otherMap; i++) {
//         let lineStep = i * 10;
//         line(lineLeft + 100, lineStep, lineRight + 100, lineStep);
//         stroke(other, 80, 80);
//     }
//     for (let i = 1; i <= otherMap; i++) {
//         let lineStep = i * 10;
//         line(lineLeft + 375, lineStep, lineRight + 375, lineStep);
//         stroke(other, 80, 80);
//     }

// }


// }
// //line Drum
// colorMode(HSB, 100);
// strokeWeight(5);
// let drumMap = map(drum, 0, 100, 30, 90);
// let lineLeft = 10;
// let lineRight = 50;
// for (let i = 0; i <= drumMap; i++) {
//     let lineStep = i * 10;
//     line(lineLeft, lineStep, lineRight, lineStep);
//     stroke(drum, 80, 80);
// }


// //line Bass

// }
// //The White Oval. Vocal
// noStroke();
// let ovalPlace = map(vocal, 0, 100, 500, 200, true);
// let ovalSize = map(vocal, 0, 100, 60, 150, true);
// fill(225);
// ellipse(width / 2, ovalPlace, ovalSize);
// //Bar

// let angle = 180

// translate(60, 945);
// rotate(angle);
// fill(200,0,0);
// strokeWeight(5);
// let drumMap = map(drum, 0, 100, 0, 50);
// let lineRight = 15;
// let lineLeft = 50;
// for (let i = 0; i <= drumMap; i++) {
//     let lineStep = i * 10;
//     line(lineRight, lineStep, lineLeft, lineStep);
//     stroke(drum, 80, 80);
// }