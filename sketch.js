const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,320,70,70);   
    box2=new Box(920,320,70,70);
    box3=new Box(700,240,70,70)
    box4=new Box(920,240,70,70)
    pig1= new Pig(810,350,50,50)
    ground=new Ground(600,height,1200,30);  
    log1=new Log(810,300,20,300,PI/2)  
    pig2= new Pig(810,250,50,50)
    log2=new Log(810,210,20,300,PI/2)
    box5= new Box(810,200,70,70)
    bird1= new Bird(50,350,30,30)
    log4=new Log(760,140,20,150,PI/7)
    log5=new Log(860,140,20,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display()
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    bird1.display();
    log5.display();
    log4.display();
}

