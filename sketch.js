var b1,b2,b3,ground,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	fill('yellow');
	
	ball=new paper(150,350,20);
	
	b1 = new Log(300, 150, 200, 20);
	
	b2 = new Log(250, 100, 20, 100);
	
	b3 = new Log(350, 100, 20, 100);

	ground =new Log(0, 200, width, 10);

}

function draw() {
  rectMode(CENTER)
  background(0);

  ball.display();
  b1.display();
  b2.display();
  b3.display();
  ground.display();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	   
	 }
   }


