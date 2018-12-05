
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  print("help");
}

function draw() {
  background(255,255,255);
  drawSprites();
  fill(0);
  ellipse(windowWidth/2, windowHeight/2, 50, 50);
}
