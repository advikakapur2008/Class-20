var ob1,ob2;
function setup() {
  createCanvas(800,400);
  ob1 = createSprite(400, 200, 50, 50);
  ob2 = createSprite(300,20,20,20);
}

function draw() {
  background(255,255,255);
  ob2.x = mouseX;
  ob2.y = mouseY;
  console.log(ob2.x-ob1.x);
  if(ob2.x-ob1.x<=ob2.width/2+ob1.width/2&&ob1.x-ob2.x<=ob2.width/2+ob1.width/2&&ob2.y-ob1.y<=ob2.height/2+ob1.height/2&&
    ob1.y-ob2.y<=ob1.height/2+ob2.height/2){
    ob1.shapeColor = "green";
    ob2.shapeColor = "green";

  }else{
    ob2.shapeColor = "blue";
    ob1.shapeColor = "blue";
  }
  drawSprites();
}