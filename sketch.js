
let x = 1;
let easing = .015;
let yoff = 0.0;
let others;
let img;

function preload() {
img = loadImage('bitmap.png');
others = loadSound('Others.mp3');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {

  function mousePressed() {
    others.play();
  }
  
  background(100);
let targetX = mouseX;
let dx = targetX - x;
x += dx * easing;


//GRADIENT//
push()
let ctx = canvas.getContext("2d");
let gradient = ctx.createLinearGradient(300, 500, x, 0);

gradient.addColorStop(0, 'lightsteelblue');
gradient.addColorStop(1, 'palevioletred');
ctx.fillStyle = gradient;

noStroke()
rect(0, 0, 800, 500);
pop()

push()
let ctz = canvas.getContext("2d");
let gradient2 = ctz.createLinearGradient(300, 500, x, 1000);

gradient2.addColorStop(0, 'lightsteelblue');
gradient2.addColorStop(1, 'palevioletred');
ctz.fillStyle = gradient2;

noStroke()
rect(0, 500, width, height)
pop()
//END OF GRADIENT//

//Suns
fill(255,182,193, 160)
circle(x,0, 100)
circle(x, 800, 100)

fill(255,145,175)
circle(x,0, 75)
circle(x, 800, 75)
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
stars();
}


function boat(){
  m = map(mouseY, 0, 800,  0, 600);
  image(img, m, 600, 50, 30)
  // if (x > width) {
  //   swim = -3;
  // }
  // x = x + swim;
}

function fishing() {
m = map(mouseX, 0, 410, 200, 800);
o = map(mouseY, 0, 200, 0, 800);
  push();
  noFill();
  stroke(0);
  beginShape();
  curveVertex(m,o);
  curveVertex(410,120);
  curveVertex(m, 120);
  curveVertex(m, o);
  curveVertex(m, o);
  curveVertex(m, o);
  curveVertex(m, o);
  endShape();
  pop()
}

function stars(){
  for(let n=3; n<= 10; n+=1){
  
   let o= random(100, 200)
   noStroke();
   fill(255, o);
   let r= random(4, 5);
  fill(255, 70);
   let x= random(0,width);
   let y= random(0, 200);
   ellipse(x, y, r);
}
}