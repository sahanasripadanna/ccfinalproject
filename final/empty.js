var tree, wind;
var forest;
// function preload() {
//   soundFormats('mp3', 'ogg');
//   amb = loadSound('audio/forest.mp3');
//   breeze = loadSound('audio/breeze.mp3');
//   breeze.setVolume(1);
//   amb.setVolume(1);
//
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  wind = createSprite(mouseX, mouseY);
  wind.addAnimation('normal', 'finals/windy01.png', 'finals/windy03.png');
  wind.velocity.x = 3;
  wind.scale = .5;
  
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

// function mouseClicked(){
//   //  breeze.pause();
//     wind = createSprite(mouseX, mouseY);
//     wind.addAnimation('normal', 'finals/windy01.png', 'finals/windy03.png');
//     wind.velocity.x = 3;
//     wind.scale = .5;
//
// //    print("before overlap");
//     print(wind.overlap(forest, explosion));
//     wind.life = 80;
//
//     breeze.play(0, 1, .75, random(0,20), 1.2);
// }
//
// function mousePressed(){
//     forest.get(1).changeAnimation('moving');
//
// }
//
// function react(){
//
// }
// function explosion(wind, forest) {
//   wind.velocity.x -= .5;
//   print("haha");
//   forest.get().changeAnimation('moving');
// }
