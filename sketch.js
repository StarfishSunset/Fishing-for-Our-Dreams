
let z = 1;
let x = 100;
let v = 100;
let easing = .015;
let yoff = 0.0;
let others;
let myWaves;
let img;

function preload() {
others = loadSound('Others.mp3')
myWaves = loadSound('waves.mp3')
img = loadImage('bitmap.png');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {

  function mousePressed() {
    others.play();
    myWaves.play()
  }
  
  background(100);
let targetX = mouseX;
let dx = targetX - z;
z += dx * easing;


//GRADIENT//
push()
let ctx = canvas.getContext("2d");
let gradient = ctx.createLinearGradient(300, 500, z, 30);

gradient.addColorStop(0, 'lightsteelblue');
gradient.addColorStop(1, 'palevioletred');
ctx.fillStyle = gradient;

noStroke()
rect(0, 0, 800, 500);
pop()

push()
let ctz = canvas.getContext("2d");
let gradient2 = ctz.createLinearGradient(300, 500, z, 925);

gradient2.addColorStop(0, 'lightsteelblue');
gradient2.addColorStop(1, 'palevioletred');
ctz.fillStyle = gradient2;

noStroke()
rect(0, 500, width, height)
pop()
//END OF GRADIENT//

//Suns
fill(255,182,193, 160)
circle(z,0, 100)
circle(z, 800, 100)

fill(255,145,175)
circle(z,0, 75)
circle(z, 800, 75)
//Suns

//Cloud start
push()
scale(1.25)
translate(320, 135)
beginShape()
noStroke()
fill(239,187,204)
ellipse(50,50,60,50);
  ellipse(80,40,60,50);
  ellipse(130,50,60,50);
  ellipse(70,70,60,50);
  ellipse(110,65,60,50);
endShape()
pop()
//Cloud end

//text
fill(199,67,117)
textSize(17)
textFont('Papyrus')
text('Move the boats left and right with the arrow keys', 30, 500);
//END text
 
fishing();

//Cloud Reflection
push()
scale(1.25)
translate(320, 600)
beginShape()
noStroke()
fill(239,187,204)
ellipse(50,50,60,50);
  ellipse(80,40,60,50);
  ellipse(130,50,60,50);
  ellipse(70,60,60,50);
  ellipse(110,65,60,50);
endShape()
pop()
//Cloud Reflection end

//Top Wave
fill(0,105,160, 20)
  stroke(244,194,194)
  beginShape();

  let xoff = 0; 

  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 25, 5, 200, 520);
    vertex(x, y);
    xoff += .15;
  }

  yoff += 0.005;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  //Middle Wave
  beginShape();

  fill(0,105,160, 30)
  let woff = 0; 

  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 30, 2.7, 200, 620);
    vertex(x, y);
    xoff += 0.15;
  }

  yoff += 0.005;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
//Middle Wave

//Bottom Wave
  beginShape();

  fill(0,105,160, 20)
  let zoff = 0; 

  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 35, 1, 100, 720);
    vertex(x, y);
    xoff += 0.15;
  }

  yoff += 0.005;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
//END wave

boat();
}

function boat(){
if (keyIsDown(LEFT_ARROW)) {
  x -= .8;
}
if (keyIsDown(RIGHT_ARROW)) {
  x += .8;
}
if (keyIsDown(LEFT_ARROW)) {
  v -= .5;
}
if (keyIsDown(RIGHT_ARROW)) {
  v += .5;
}
  m = map(x, 0, 800,  0, 800);
  n = map(v+ 150, 0, 800, 0, 800);
  image(img, m, 600, 50, 30);
  image(img, n, 660, 50, 30);
}

function fishing() {
o = map(mouseY, 0, 200, 0, 500);
m = map(mouseX, 0, 410, 0, 800);
g = map(mouseX, 0, 410, 0, 800)

  push();
  noFill();
  stroke(0);
  beginShape();
  curveVertex(410, o);
  curveVertex(410, 120);
  curveVertex(410, 800);
  curveVertex(g, o);
  endShape();
  pop()
}