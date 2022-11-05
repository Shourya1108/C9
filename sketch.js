var box
function setup() {
  createCanvas(1600,1600);
}

function draw() 
{
  background("blue");
box=createSprite(200,200,41,69)
box.shapeColor="magenta"
if(keyIsDown (RIGHT_ARROW)) {
  box.position.x+=5
}
if(keyIsDown (LEFT_ARROW)) {
  box.position.x-=5
}
drawSprites()

if(keyIsDown (DOWN_ARROW)) {
  box.position.y+=5
}
if(keyIsDown (UP_ARROW)) {
  box.position.y-=5
}

}
