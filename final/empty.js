var tree, wind, num;
var forest;
function preload() {
	//preload all sound files
  soundFormats('mp3', 'ogg');
  amb = loadSound('forest.mp3');
  breeze = loadSound('breeze.mp3');
	all = loadSound('allchimes.mp3');
	chime1 = loadSound('chime1.mp3');
	chime2 = loadSound('chime2.mp3');
	chime3 = loadSound('chime3.mp3');
	chime4 = loadSound('chime4.mp3');
	//set volume of background sounds
  amb.setVolume(.8);
	//preload all image animation files
	windchime001 = loadImage('windchime001.png');
	windchime002 = loadImage('windchime002.png');
	windchime003 = loadImage('windchime003.png');
	windchime004 = loadImage('windchime004.png');
	windchime005 = loadImage('windchime005.png');
	windchime006 = loadImage('windchime006.png');
	windchime007 = loadImage('windchime007.png');
	windchime008 = loadImage('windchime008.png');
	windchime009 = loadImage('windchime009.png');
	windchime010 = loadImage('windchime010.png');
	windchime011 = loadImage('windchime011.png');
	windy01 = loadImage('windy01.png');
	windy02 = loadImage('windy02.png');
	windy03 = loadImage('windy03.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
//	frameRate(30);
	//loop the ambient background noise
  amb.loop();
	//make windchime trees a Sprite Group (same behavior)
  forest = new Group();
	//js doesn't do matrices so draw in nested for loop 1 array
  for (var i = 0; i < 7; i++){
    for (var j = 0; j < 3; j++){
      tree = createSprite(200+170*i, 150+ 170*j);
			//default animation movement = still
      tree.addAnimation('normal', windchime001, windchime001);
      //swaying motion
			tree.addAnimation('moving', windchime001, windchime002, windchime003, windchime004, windchime005, windchime006, windchime007, windchime008, windchime009,
											 windchime010, windchime011);
      tree.scale = .15;
     // tree.debug = true;
			tree.looping = true;
			//after declaring sprite add to group
      forest.add(tree);
    }
  }
}
//function to create wind sprite based on mouse location
function createWind(x, y, num){
	var wind = createSprite(x,y);
  wind.addAnimation('normal', windy01, windy02, windy03);
	//sprite will continue moving horizontally independently
  wind.velocity.x = 3;
  wind.scale = .5;
//	wind.debug = true;
	wind.visible = true;
	//will disappear after specified amount of time
	wind.life = 50;
	react(wind, forest, num);
	return wind;
}

function react(spriteA, spriteB, num){
	//iterate through each tree in group
	for (var k = 0; k < 21; k++){
			if (spriteA.overlap(spriteB.get(k)))
			{
				var sec = millis();
				spriteB.get(k).changeAnimation('moving');
				if (sec % 5 == 0){
					spriteB.get(k).changeAnimation('normal');
				}
				  num = Math.round(num);
				 //randomly play a base wind chime noise
				 if (num == 1){
					 chime1.play(0, 1, .2, 0);
				 }
				 else if (num == 2){
					 chime2.play(0, 1, .2, 0);
				 }
				 else if (num == 3)
					chime3.play(0, 1, .2, 0);
				 else (num ==4)
					chime4.play(0, 1, .2, 0);
				//twinkly wind chime sound on top
				all.play(0, 1, .20, random(0, 20), 14);
			}
			else
			{
				//keep as static if wind isnt touching
				spriteB.get(k).changeAnimation('normal');
			}
	}
}

function draw() {
  background(119, 238, 155);

	drawSprites();
}


 function mouseClicked(){
	 //create new sprite every time mouse is clicked
	 var num = random(1, 4);
	 var wind = createWind(mouseX, mouseY, num);
	 breeze.play(.3, 1, .20, random(0,20), 1.5);

	// print(num);
 }
