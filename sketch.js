function setup(){
    createCanvas(600,400);
    background(50,50,50);
}

function draw(){
    fill(200,0,255);
    noStroke();
    ellipse(mouseX,mouseY,100,100);
}