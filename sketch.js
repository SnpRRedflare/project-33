const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine,world;
var snow = [];
var snow1,snow2;
var bg;

function preload(){
  bg = loadImage("snow1.jpg")
}



function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);
  if (frameCount % 50 === 0){
    for (var i = 0; i < 200; i ++){
      snow.push(new Snow(random(0,800),random(0,800)))
    }
  }
}

function draw() {
  background(bg);  
  Engine.update(engine);
  for (var i = 0; i < 200; i ++){
    snow[i].showDrop();
    snow[i].updateY();
  }
  drawSprites();
}