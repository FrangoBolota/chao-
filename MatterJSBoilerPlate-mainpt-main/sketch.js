
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world
var bola
var quadrado 
var retangulo
var chao

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var chao_options={
		isStatic:true
	}

	var bola_option = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
	bola = Bodies.circle(220,10,10,bola_option);
	World.add(world,bola)

	var quadrado_option = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	quadrado = Bodies.rectangle(110,50,10,10,quadrado_option);
	World.add(world,quadrado)

	var retangulo_option = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}
	retangulo = Bodies.rectangle(350,50,10,10,retangulo_option);
	World.add(world,retangulo)

	chao = Bodies.rectangle(200,390,400,20,chao_options);
	World.add(world,chao)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ellipse(bola.position.x,bola.position.y,10)
  rect(quadrado.position.x,quadrado.position.y,10,10)
  rect(retangulo.position.x,retangulo.position.y,10,10)
  rect(chao.position.x,chao.position.y,400,20)
}



