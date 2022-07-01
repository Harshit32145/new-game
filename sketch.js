var bgimage,jackimg;
var jack,bg;
var tower,towerImg;
var ghost,ghostImg;

var door,doorImg,doorGroup;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
 
  ghostImg = loadImage("ghost-standing.png");
  jackimg=loadImage("images\jack1.png");
  bgimage=loadImage("images\track.jpg");
}


function setup(){
  createCanvas(600,600);
  
  bg=createSprite(300,300,20,20);
  bg.addImage ("bg",bgimage);
  
  jack=createSprite(300,150,10,10);
  jack.addImage ("jack",jackimg);
  jack.scale=0.8;
  
  
  
  bg.velocityY=1;
}

function draw(){
  background("black");
  
  if(keyDown("up_arrow")){
    jack.velocityY=-5;
  }
  if(keyDown("left_arrow")){
    jack.x-=3;
  }
  if(keyDown("right_arrow")){
    jack.x+=3;
  }
  jack.velocityY+=0.6;
  
  
  
  
  
  
  
  if (bg.y >400){
      bg.y = 300;
    }
  //spawndoor();
  drawSprites();
  
  
}

function spawndoor() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    door = createSprite(600,100,40,10);
    door.x = Math.round(random(120,400));
    door.addImage(doorImg);
    door.scale = 0.5;
    door.velocityY = 1;
    door.lifetime = 134;
    
    //adjust the depth
    door.depth = jack.depth;
    jack.depth = jack.depth + 1;
    
    
  }
}


