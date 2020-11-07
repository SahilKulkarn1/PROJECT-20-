var car, wall; 
var speed, weight; 




function setup() { 
  createCanvas(1700,1000);
  speed=random(55,90)
weight=random(55,90)

  car=createSprite(50,200,50,50)
  car.velocityX=speed 
wall=createSprite(1500,400,60,height/2)


}








function draw() {
  background(0);
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var d=0.5 * weight * speed * speed/22509;
    if(d>180){
    car.shapeColor=color(255,0,0)
    }
    if(d<180 && d>100)
    {
      car.shapeColor=color(230,230,0)
    }
    if(d<100)
    {
      car.shapeColor=color(0,225,0)
    }
  }
  drawSprites();
}