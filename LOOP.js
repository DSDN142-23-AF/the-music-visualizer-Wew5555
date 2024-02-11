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
    //The little circle
    if (counter > 24 && counter < 58) {
        let size = map(bass, 0, 100, 20, 50);
        let smallSize = 15;
        let ellipse_X = [80, 220, 340, 460, 470, 500, 50, 100, 450, 240, 150, 360];
        let ellipse_Y = [80, 190, 250, 100, 300, 600, 490, 320, 700, 670, 640, 820, 810];
        //The outside ellipse
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
        //The inside ellipse
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
    // The shaking little circle
    if (counter > 35.5 && counter < 58) {
        let shaking = map(drum, 0, 100, 70, 20);
        let size = map(bass, 0, 100, 20, 50);
        let shaking1 = map(drum, 0, 100, 70, 60);
        let smallSize = 15;
        let ellipse_X = [80, 220, 340, 460, 470, 500, 50, 100, 450, 240, 150, 360];
        let ellipse_Y = [80, 190, 250, 100, 300, 600, 490, 320, 700, 670, 640, 820, 810];
        //The outside ellipse
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
        //The inside ellipse
        noStroke();
        fill(255, 255, 0);
        ellipse(ellipse_X[0], ellipse_Y[0], shaking1, smallSize);
        ellipse(ellipse_X[1], ellipse_Y[1], shaking1, smallSize);
        ellipse(ellipse_X[2], ellipse_Y[2], shaking1, smallSize);
        ellipse(ellipse_X[3], ellipse_Y[3], shaking1, smallSize);
        ellipse(ellipse_X[4], ellipse_Y[4], shaking1, smallSize);
        ellipse(ellipse_X[5], ellipse_Y[5], shaking1, smallSize);
        ellipse(ellipse_X[6], ellipse_Y[6], shaking1, smallSize);
        ellipse(ellipse_X[7], ellipse_Y[7], shaking1, smallSize);
        ellipse(ellipse_X[8], ellipse_Y[8], shaking1, smallSize);
        ellipse(ellipse_X[9], ellipse_Y[9], shaking1, smallSize);
        ellipse(ellipse_X[7], ellipse_Y[10], shaking1, smallSize);
        ellipse(ellipse_X[10], ellipse_Y[11], shaking1, smallSize);
        ellipse(ellipse_X[11], ellipse_Y[12], shaking1, smallSize);
    }
    //The big drama
    if (counter > 58 && counter < 62.5) {
        strokeWeight(5);
        let angle = 180;
        translate(535, 960);
        rotate(angle);

        let drumMap = map(drum, 0, 100, 0, 70);
        let bassMap = map(bass, 0, 100, 0, 70);
        let otherMap = map(other, 0, 100, 0, 70);
        let oval_Down1 = map(vocal, 0, 100, 100, 300);
        let lineLeft = 10;
        let lineRight = 50;

        //Drum    
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
        //Bass
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
        //Other
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
        //Vocal
        fill(255, 255, 0);
        ellipse(width / 2, height / 2, oval_Down1, oval_Down1);
    }
    //Big drama but white background
    if (counter > 62.5) {
        background(255);
        strokeWeight(5);
        let angle = 180;
        translate(535, 960);
        rotate(angle);

        let drumMap = map(drum, 0, 100, 0, 70);
        let bassMap = map(bass, 0, 100, 0, 70);
        let otherMap = map(other, 0, 100, 0, 70);
        let oval_Down1 = map(vocal, 0, 100, 100, 300);
        let lineLeft = 10;
        let lineRight = 50;
        //Durm
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
        //Bass
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
        //Other
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
        noFill();
        ellipse(width / 2, height / 2, oval_Down1, oval_Down1);
    }
    //Big drame, white background but at the top
    if (counter > 90.5) {
        strokeWeight(5);
        let angle = 180;
        translate(535, 960);
        rotate(angle);

        let drumMap = map(drum, 0, 100, 0, 70);
        let bassMap = map(bass, 0, 100, 0, 70);
        let otherMap = map(other, 0, 100, 0, 70);
        let oval_Down1 = map(vocal, 0, 100, 100, 300);
        let lineLeft = 10;
        let lineRight = 50;

        //Drum
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
        //Bass
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
        //Other
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
        //Vocal
        noFill();
        ellipse(width / 2, height / 2, oval_Down1, oval_Down1);
    }
    //The little circle
    if (counter > 101.5) {
        noStroke();
        let size = map(bass, 0, 100, 20, 50);
        let smallSize = 15;
        let ellipse_X = [80, 220, 340, 460, 470, 500, 50, 100, 450, 240, 150, 360];
        let ellipse_Y = [80, 190, 250, 100, 300, 600, 490, 320, 700, 670, 640, 820, 810];
        //The outside ellipse
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
        //The inside ellipse
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
    //The background change from white to back
    if (counter > 124.5 && counter < 135.5) {
        let backgroundColour1 = map(counter, 124.5, 135.5, 255, 0);
        background(backgroundColour1);

        strokeWeight(5);

        let drumMap = map(drum, 0, 100, 0, 70);
        let bassMap = map(bass, 0, 100, 0, 70);
        let otherMap = map(other, 0, 100, 0, 70);
        let oval_Down1 = map(vocal, 0, 100, 100, 300);
        let lineLeft = 10;
        let lineRight = 50;
        //Durm
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
        //Bass
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
        //Other
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
        noFill();
        ellipse(width / 2, height / 2, oval_Down1, oval_Down1);

        strokeWeight(5);
        let angle = 180;
        translate(535, 960);
        rotate(angle);

        //Drum
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
        //Bass
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
        //Other
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
        //Vocal
        noFill();
        ellipse(width / 2, height / 2, oval_Down1, oval_Down1);

        noStroke();
        let size = map(bass, 0, 100, 20, 50);
        let smallSize = 15;
        let ellipse_X = [80, 220, 340, 460, 470, 500, 50, 100, 450, 240, 150, 360];
        let ellipse_Y = [80, 190, 250, 100, 300, 600, 490, 320, 700, 670, 640, 820, 810];
        //The outside ellipse
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
        //The inside ellipse
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
    //The first set on repeat
    if (counter > 135.5) {
        background(0);

        let oval_Down = map(vocal, 0, 100, 100, 300);
        fill(255, 255, 0);
        noStroke();
        ellipse(width / 2, height / 2, oval_Down, oval_Down);

        let size = map(bass, 0, 100, 20, 50);
        let smallSize = 15;
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
    //The shaking
    if (counter > 147) {
        let shaking = map(drum, 0, 100, 70, 20);
        let size = map(bass, 0, 100, 20, 50);
        let shaking1 = map(drum, 0, 100, 70, 60);
        let smallSize = 15;
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

        noStroke();
        fill(255, 255, 0);
        ellipse(ellipse_X[0], ellipse_Y[0], shaking1, smallSize);
        ellipse(ellipse_X[1], ellipse_Y[1], shaking1, smallSize);
        ellipse(ellipse_X[2], ellipse_Y[2], shaking1, smallSize);
        ellipse(ellipse_X[3], ellipse_Y[3], shaking1, smallSize);
        ellipse(ellipse_X[4], ellipse_Y[4], shaking1, smallSize);
        ellipse(ellipse_X[5], ellipse_Y[5], shaking1, smallSize);
        ellipse(ellipse_X[6], ellipse_Y[6], shaking1, smallSize);
        ellipse(ellipse_X[7], ellipse_Y[7], shaking1, smallSize);
        ellipse(ellipse_X[8], ellipse_Y[8], shaking1, smallSize);
        ellipse(ellipse_X[9], ellipse_Y[9], shaking1, smallSize);
        ellipse(ellipse_X[7], ellipse_Y[10], shaking1, smallSize);
        ellipse(ellipse_X[10], ellipse_Y[11], shaking1, smallSize);
        ellipse(ellipse_X[11], ellipse_Y[12], shaking1, smallSize);
    }
    //The big big drama
    if (counter > 169.8) {
        colorMode(HSB, 100);
        strokeWeight(5);
        let angle = 180;
        translate(535, 960);
        rotate(angle);

        let drumMap = map(drum, 0, 100, 0, 70);
        let bassMap = map(bass, 0, 100, 0, 70);
        let otherMap = map(other, 0, 100, 0, 70);
        let oval_Down1 = map(vocal, 0, 100, 100, 300);
        let lineLeft = 10;
        let lineRight = 50;

        //Drum
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
        //Bass
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
        //Other
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
        //Vocal
        ellipse(width / 2, height / 2, oval_Down1, oval_Down1);
    }
    //The big drama with colour and white
    if (counter > 174) {
        background(255);
        colorMode(HSB, 100);
        strokeWeight(5);
        let angle = 180;
        translate(535, 960);
        rotate(angle);

        let drumMap = map(drum, 0, 100, 0, 70);
        let bassMap = map(bass, 0, 100, 0, 70);
        let otherMap = map(other, 0, 100, 0, 70);
        let oval_Down1 = map(vocal, 0, 100, 100, 300);
        let lineLeft = 10;
        let lineRight = 50;

        //Drum
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
        //Bass
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
        //Other
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
        //Vocal
        noFill();
        ellipse(width / 2, height / 2, oval_Down1, oval_Down1);
    }
    //The other half
    if (counter > 185) {
        background(255);
        colorMode(HSB, 100);
        strokeWeight(5);
        let angle = 180;
        translate(535, 960);
        rotate(angle);

        let drumMap = map(drum, 0, 100, 0, 70);
        let bassMap = map(bass, 0, 100, 0, 70);
        let otherMap = map(other, 0, 100, 0, 70);
        let oval_Down1 = map(vocal, 0, 100, 100, 300);
        let lineLeft = 10;
        let lineRight = 50;

        //Drum
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
        //Bass
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
        //Other
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
        //Vocal
        noFill();
        ellipse(width / 2, height / 2, oval_Down1, oval_Down1);
    }
    //Big drama at the end
    if (counter > 190.5 && counter < 203) {

        background(0);
        let shaking = map(drum, 0, 100, 70, 20);
        let size = map(bass, 0, 100, 20, 50);
        let shaking1 = map(drum, 0, 100, 70, 60);
        let smallSize = 15;
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

        noStroke();
        fill(255, 255, 0);
        ellipse(ellipse_X[0], ellipse_Y[0], shaking1, smallSize);
        ellipse(ellipse_X[1], ellipse_Y[1], shaking1, smallSize);
        ellipse(ellipse_X[2], ellipse_Y[2], shaking1, smallSize);
        ellipse(ellipse_X[3], ellipse_Y[3], shaking1, smallSize);
        ellipse(ellipse_X[4], ellipse_Y[4], shaking1, smallSize);
        ellipse(ellipse_X[5], ellipse_Y[5], shaking1, smallSize);
        ellipse(ellipse_X[6], ellipse_Y[6], shaking1, smallSize);
        ellipse(ellipse_X[7], ellipse_Y[7], shaking1, smallSize);
        ellipse(ellipse_X[8], ellipse_Y[8], shaking1, smallSize);
        ellipse(ellipse_X[9], ellipse_Y[9], shaking1, smallSize);
        ellipse(ellipse_X[7], ellipse_Y[10], shaking1, smallSize);
        ellipse(ellipse_X[10], ellipse_Y[11], shaking1, smallSize);
        ellipse(ellipse_X[11], ellipse_Y[12], shaking1, smallSize);

        colorMode(HSB, 100);
        strokeWeight(5);
        let angle = 180;
        translate(535, 960);
        rotate(angle);

        let drumMap = map(drum, 0, 100, 0, 70);
        let bassMap = map(bass, 0, 100, 0, 70);
        let otherMap = map(other, 0, 100, 0, 70);
        let oval_Down1 = map(vocal, 0, 100, 100, 300);
        let lineLeft = 10;
        let lineRight = 50;

        //Drum
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
        //Bass
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
        //Other
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
        //Vocal
        ellipse(width / 2, height / 2, oval_Down1, oval_Down1);
    }
    //End with white background and colour
    if (counter > 203 && counter < 215) {
        colorMode(HSB, 100);
        strokeWeight(5);
        let angle = 180;
        translate(535, 960);
        rotate(angle);

        let drumMap = map(drum, 0, 100, 0, 70);
        let bassMap = map(bass, 0, 100, 0, 70);
        let otherMap = map(other, 0, 100, 0, 70);
        let oval_Down1 = map(vocal, 0, 100, 100, 300);
        let lineLeft = 10;
        let lineRight = 50;

        //Drum
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
        //Bass
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
        //Other
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
        //Vocal
        ellipse(width / 2, height / 2, oval_Down1, oval_Down1);

        colorMode(HSB, 100);
        strokeWeight(5);

        //Drum
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
        //Bass
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
        //Other
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
        //Vocal
        ellipse(width / 2, height / 2, oval_Down1, oval_Down1);
    }
}