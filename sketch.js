const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;

function setup() 
{
createCanvas(400,400);
  
engine=Engine.create();

world=engine.world;

var optionground =  
{
isStatic:true
}

ground=Bodies.rectangle(200,390,400,20,optionground);
World.add(world,ground);

var optionball = 
{
restitution:0.8
}

ball = Bodies.circle(200,100,20,optionball);
World.add(world,ball)

console.log(ground)
console.log(ball)

}

function draw() 
{

  background(0); 

Engine.update(engine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)


  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)


}