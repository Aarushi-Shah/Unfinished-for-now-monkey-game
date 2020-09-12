var player, stone, banana, bground, groundI


function preload() {
  groundI = loadAnimation("jungle.jpg")
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bground = loadImage("jungle.jpg");
  banana_img = loadImage("banana.png")
  rock_img = loadImage("stone.png")
}

function setup() {
  createCanvas(400, 400);

  bground = createSprite(200, 200, 200, 200);
  bground.addAnimation("groundI", groundI)
  bground.velocityX = -2;
  bground.x = bground.width / 2;
  groundI.visible = false;

  banana = createSprite(200, 120);
  banana.addImage("banana_img", banana_img);
  banana.scale = 0.15;
  banana.velocityX = -2;

  player = createSprite(50, 300);
  player.addAnimation("player_running", player_running);
  player.scale = 0.21;


}

function drawBanana(){
  banana = createSprite(200, 120);
  banana.addImage("banana_img", banana_img);
  banana.scale = 0.15;
  banana.velocityX = -2;
}

function draw() {
  //background(225);


  if(bground.x < 0) {
    bground.x = bground.width / 2;
  }
  if(World.frameRate%60 === 0){
    drawBanana();
  }
  if(banana.isTouching(player)){
    console.log('test');
  }

  if (keyDown("space")){
    player.velocityY = -10;
  } else {
    player.y = 300
  }

  if (World.frameCount % 60 === 0) {
    var rock = createSprite(400, 365, 10, 40);
  }

























  drawSprites();
}