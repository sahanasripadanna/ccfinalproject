var tree;
var forest = [];
var inj;
function setup() {
  createCanvas(windowWidth, windowHeight);
  print("help");
  tree = createSprite(windowWidth/2, windowHeight/2);
  tree.addAnimation('normal', 'finals/windchime001.png', 'finals/windchime001.png');
  tree.addAnimation('moving', 'finals/windchime001.png', 'finals/windchime011.png');
  tree.scale = .1;
  tree.debug = true;
  for (var i = 1; i < 10; i++){
    forest[i] = createSprite(100*i, 100);
    forest[i].addAnimation('normal', 'finals/windchime001.png', 'finals/windchime001.png');
    forest[i].addAnimation('moving', 'finals/windchime001.png', 'finals/windchime011.png');
    forest[i].scale = .2;
    forest[i].debug = true;
  }
}

function draw() {
  background(255,255,255);
  drawSprites();
  fill(0);
  //tree.changeAnimation('normal');
}

function mouseClicked(){
    wind = createSprite(mouseX, mouseY);
    wind.addAnimation('normal', 'finals/windy01.png', 'finals/windy03.png');
    wind.velocity.x = 3;
    wind.life = 30;
    wind.debug = true;
    if (tree.overlapPoint(wind)){
      tree.changeAnimation('moving');
      print("ha");
    }
    tree.changeAnimation('moving');

}
