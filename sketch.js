var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);

 fixedRect=createSprite(200,200,50,80);
 fixedRect.shapeColor="green";
 fixedRect.debug=true;

 movingRect=createSprite(400,200,80,30);
 movingRect.shapeColor="green";
 movingRect.debug=true;

gameObject1=createSprite(100,100,50,50);
gameObject1.shapeColor="green";

gameObject2=createSprite(200,100,50,50);
gameObject2.shapeColor="green";

gameObject3=createSprite(300,100,50,50);
gameObject3.shapeColor="green";

gameObject4=createSprite(400,100,50,50);
gameObject4.shapeColor="green";
}

function draw() {
  background(0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }


  drawSprites();
}
  function isTouching(Object1,Object2){
    if(Object1.x-Object2.x < Object2.width/2+Object1.width/2&&
      Object2.x-Object1.x < Object2.width/2+Object1.width/2&&
      Object1.y-Object2.y < Object2.height/2+Object1.height/2 && 
      Object2.y-Object1.y < Object2.height/2+Object1.height/2){
      return true;
    }
    else{
      return false;
    }
    
  }
