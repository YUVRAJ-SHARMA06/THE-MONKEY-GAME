
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

var SurvivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
   createCanvas(600,500);
    
   monkey = createSprite(160,420,20,20);
   monkey.addAnimation("moving",monkey_running);
   monkey.scale = 0.1;
  
  
   ground = createSprite(300,450,600,10);
   ground.velocityX = -4;
   ground.x = ground.width /2;
  
  bananasGroup = new Group();
  
}


function draw() {
  
  background("white");
  
  if(keyDown("space") && monkey.y >= 159){
    
    monkey.velocityY = -12;
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);     
  
  if (ground.x < 300){
      ground.x = ground.width/2;
    }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("SCORE:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime = Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME:"+ SurvivalTime,100,50);
  
  spawnfood();
  spawnobstacles();
  drawSprites();
  
  score = 0;
}

function spawnobstacles(){
  if(frameCount % 200 === 0){
  var obstacle = createSprite(600,420,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -6;
    var rand = Math.round(random(1,6));
    obstacle.lifetime = 100;
  }
}

function spawnfood(){
  
if(frameCount % 80 === 0){
  var banana = createSprite(600,300,20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
  var rand = Math.round(random(80,120));
  banana.lifetime = 200;
  
  bananasGroup.add(banana);
}
  
  
}


