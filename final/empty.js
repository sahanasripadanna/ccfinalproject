var tree;
var forest;

function setup() {
  createCanvas(windowWidth, windowHeight);
  forest = new Group();
  for (var i = 0; i < 9; i++){
    for (var j = 0; j < 3; j++){
      tree = createSprite(100+150*i, 150+ 150*j);
      tree.addAnimation('normal', 'finals/windchime001.png', 'finals/windchime001.png');
      tree.addAnimation('moving', 'finals/windchime001.png', 'finals/windchime011.png');
      tree.scale = .15;
      tree.debug = true;
      forest.add(tree);
    }
  }
}

function draw() {
  background(119, 238, 155);
  drawSprites();
  fill(0);
  //tree.changeAnimation('normal');
}

function mouseClicked(){
    wind = createSprite(mouseX, mouseY);
    wind.addAnimation('normal', 'finals/windy01.png', 'finals/windy03.png');
    wind.velocity.x = 3;

    wind.debug = true;
    print("before overlap");
    wind.overlapPixel(forest, explosion);
    wind.life = 60;
    tree.changeAnimation('moving');
}


function explosion(wind, forest) {
  wind.velocity.x -= .5;
  print("haha");
  forest.changeAnimation('moving');
}
