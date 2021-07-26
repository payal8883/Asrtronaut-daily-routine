const Engine= Matter.Engine
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine;
var spaceshipRoom;
var astronauts;
var bg;
var bathImg,brushImg,drinkImg,eatImg,gymImg,moveImg,sleepImg;
var wall1,wall2,wall3,wall4,edges;

function preload(){
 bg=loadImage("images/1193.jpg");
 bathImg=loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
 brushImg=loadAnimation("images/brush.png","images/brush.png","images/brush.png");
 drinkImg=loadAnimation("images/drink1.png","images/drink2.png");
 sleepImg=loadAnimation("images/sleep.png");
 moveImg=loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png");
 gymImg=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
 eatImg=loadAnimation("images/eat1.png","images/eat2.png");
}

function setup() {
  createCanvas(600,500);
  edges=createEdgeSprites();
  astronauts=createSprite(300, 230);
 astronauts.scale=0.12;
 astronauts.addAnimation("sleep",sleepImg);

 wall1=createSprite(600,250,5,500);
 wall1.visible=false;
 wall2=createSprite(300,0,600,5);
 wall2.visible=false;
 wall3=createSprite(0,250,5,500);
 wall3.visible=false;
 wall4=createSprite(300,500,600,5);
 wall4.visible=false;
 //astronauts.setVelocity(1,1);
 
}

function draw() {
  background(bg); 
  stroke ("black");
  fill ("white");
  text("INSTRUCTION:",20,370);
  text("M key  = moveing",40,385);
  text("G key = gyming",40,400);
  text("UP_ARROW = brushing",40,415);
  text("DOWN_ARROW = bathing",40,430);
  text("RIGHT_ARROW = eating",40,445);
  text("LEFT_ARROW = drinking",40,460);

  astronauts.bounceOff(edges);
  drawSprites();


  if (keyDown("UP_ARROW")){
    astronauts.addAnimation("brushing",brushImg);
    astronauts.changeAnimation("brushing");
    astronauts.y=350;
    astronauts.setVelocity(0,0);
  }

  if(keyDown("M")){
    astronauts.addAnimation("moving",moveImg);
    astronauts.changeAnimation("moving");
    console.log(astronauts.x+" "+astronauts.y);
    //astronauts.y=250;
    //astronauts.x=300;
    astronauts.setVelocity(1,1);
    //astronauts.velocityX=1;
    //astronauts.velocityY=1;
  }
  if(keyDown("DOWN_ARROW")){
    astronauts.addAnimation("bathing",bathImg);
    astronauts.changeAnimation("bathing");
    astronauts.y=350;
    astronauts.setVelocity(0,0);

  }
  if(keyDown("RIGHT_ARROW")){
    astronauts.addAnimation("eating",eatImg);
    astronauts.changeAnimation("eating");
    astronauts.y=350;
    astronauts.setVelocity(0,0);
  }
  if(keyDown("LEFT_ARROW")){
  astronauts.addAnimation("drinking",drinkImg);
  astronauts.changeAnimation("drinking");
  astronauts.y=350;
  astronauts.setVelocity(0,0);
}
  if(keyDown("G")){
    astronauts.addAnimation("gyming",gymImg);
    astronauts.changeAnimation("gyming");
    astronauts.y=350;
    astronauts.setVelocity(0,0);
  }

  
}