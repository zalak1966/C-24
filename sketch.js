const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(910,320,70,70);
    box3 = new Box(700,290,70,70);
    box4 = new Box(910,290,70,70);
    box5 = new Box(805,180,70,70);
    ground = new Ground(500,height,1000,20)
    Pig1 = new Pig(805,350)
    Pig2 = new Pig(805,280)
    Log1 = new Log(805,300,280,PI/2)
    Log2 = new Log(805,200,280,PI/2)
    Log3 = new Log(730,130,140,PI/4)
    Log4 = new Log(890,130,140,-PI/4)
    bird = new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    Pig1.display();
    Pig2.display();
    Log1.display();
    Log2.display();
    Log3.display();
    Log4.display();
    bird.display();
   fill ("White")
    text(mouseX+","+mouseY,mouseX,mouseY)
}