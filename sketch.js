
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var side1,side2;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var groundOption = {
		isStatic:true
	}
	ground = Bodies.rectangle(400,680,800,20,groundOption);
	World.add(world,ground);


	side1 = Bodies.rectangle(550,640,10,80);
	World.add(world,side1);

	side2 = Bodies.rectangle(700,640,10,80);
	World.add(world,side2);

	var paperOptions = {
		restitution:0.8
	}
	paper = Bodies.circle(50,500,15,paperOptions);
	World.add(world,paper);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  fill("brown")
  rect(ground.position.x,ground.position.y,800,20);
  fill("yellow");
  rect(side1.position.x,side1.position.y,10,80);
  rect(side2.position.x,side2.position.y,10,80);
  fill("white");
  ellipse(paper.position.x,paper.position.y,15,15);
}

function keyPressed(){
	if(keyCode==32){
		
		Matter.Body.applyForce(paper,paper.position,{x:85,y:-85})
	}
}

