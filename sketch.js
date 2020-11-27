
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350,100,300,30);

	bobObject1 = new Bob(250,400);
	bobObject2 = new Bob(300,400);
	bobObject3 = new Bob(350,400);
	bobObject4 = new Bob(400,400);
	bobObject5 = new Bob(450,400);

	rope1 = new Rope(bobObject1.body,roof.body,-100,0);
	rope2 = new Rope(bobObject2.body,roof.body,-50,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,50,0);
	rope5 = new Rope(bobObject5.body,roof.body,100,0);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

	noStroke();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();

}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-800,y:0});
	}
}



