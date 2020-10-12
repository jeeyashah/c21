var fixedRect, movingRect, other, other1, other2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  other = createSprite(300, 500, 50, 80);
  other.shapeColor="yellow";
  other1 = createSprite(300, 100, 50, 80);
  other1.shapeColor="red";
  other2 = createSprite(100, 100, 50, 80);
  other2.shapeColor="blue";
other.velocityY=-3;
  
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  
  movingRect.y= mouseY;
  movingRect.x= mouseX;

  bounceoff(other, other1);
 if(isTouching(movingRect,other)){
text("hi", 200,200);

 }
  drawSprites();
}

