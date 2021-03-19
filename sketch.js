
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var bob;
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob =  new Bob(400,400,30,30 )
	rope = new Rope()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob.display();
  rope.display();
  
  drawSprites();
 
}



