function draw_one_frame(words, vocal, drum, bass, other,counter) {
    //background(0);
    //The Yellow Oval. Drum
    //let oval_Down = map(drum, 40, 100, 200, 550, true);
    //fill(255, 255, 0);
    //ellipse(width / 2, 950, oval_Down, oval_Down);
    //The White Oval. Vocal
   
   
    colorMode(HSB,100);
    background(255);
    rectMode(CENTER);
    strokeWeight(9);
    stroke(drum,80,80);

    let drumMap = map(drum, 0,100,30,90);
    line(100,300,400,300);

    
   // let ovalPlace = map(vocal,0, 150, 500, 200, true);
    //let ovalSize = map(vocal, 0, 100, 60, 150, true);
    //fill(225);
    //ellipse(width / 2, ovalPlace, ovalSize);
}