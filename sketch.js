let yoff = 0.0;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(100);

//GRADIENT//
push()
let ctx = canvas.getContext("2d");
let gradient = ctx.createLinearGradient(300, 500, 800, 0);

gradient.addColorStop(0, 'lightsteelblue');
gradient.addColorStop(1, 'palevioletred');
ctx.fillStyle = gradient;

noStroke()
rect(0, 0, 800, 500);
pop()

push()
let ctz = canvas.getContext("2d");
let gradient2 = ctz.createLinearGradient(300, 500, 1000, 1000);

gradient2.addColorStop(0, 'lightsteelblue');
gradient2.addColorStop(1, 'palevioletred');
ctz.fillStyle = gradient2;

noStroke()
rect(0, 500, windowWidth, windowHeight)
pop()
//END OF GRADIENT//


fill('lightpink')
circle(800,0, 100)
circle(800, 800, 100)

fill(255,145,175)
circle(800,0, 75)
circle(800, 800, 75)

//Top Wave
fill(0,105,160, 40)
  stroke(244,194,194)
  beginShape();

  let xoff = 0; 

  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 50, 1, 100, 520);
    vertex(x, y);
    xoff += 0.05;
  }

  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  
//Bottom Wave
  beginShape();

  fill(0,105,160, 20)
  let zoff = 0; 

  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 30, 1, 100, 650);
    vertex(x, y);
    xoff += 0.05;
  }

  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

}