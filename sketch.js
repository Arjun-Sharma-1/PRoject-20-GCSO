var car,wall
var speed,weight


function setup() {
  createCanvas(800,400);
speed=random(55,90);
weight=random(400,1500);
 car= createSprite(40, 200, 50, 50);
 wall=createSprite(700,200,20,height/2);
 car.velocityX=speed;

}

function draw() {
  background("black");  
  if (wall.x-car.x<=wall.width/2+car.width/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
   if (deformation>180){
     car.shapeColor="red";
   }
   if (deformation<180&&deformation>100){
    car.shapeColor="yellow";
  }
  if (deformation<100){
    car.shapeColor="green";
  }
  }
  drawSprites();
}