var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine, world;
var walkingBoyImg = [], thunderBoltImg = [];
var img, current;
var umbrella, drops = [];
var possible = true;

function preload(){
    for(var i = 1; i <= 8; i++){
        walkingBoyImg[i-1] = loadImage("images/Walking Frame/walking_"+i.toString()+".png")
    }
    for(var i = 1; i <= 4; i++){
        thunderBoltImg[i-1] = loadImage("images/thunderbolt/"+i.toString()+".png")
    }
}

function setup(){
   createCanvas(500, 1000)

    engine = Engine.create();
    world = engine.world;
    imageMode(CENTER);

    img = walkingBoyImg[7];

    umbrella = new Umbrella(width/2, height-250)
    for(var i = 0; i<100; i++){
        drops.push(new createDrop(random(width), random(height)))
    }
}

function draw(){
    background(0)
    // image(walkingBoyImg[0], width/2, height-200, 400, 400)

    image(img, width/2, height-200, 400, 400)

    for(var i in drops){
        drops[i].update()
        drops[i].display()
    }
    umbrella.display()
    Matter.Engine.update(engine)

    if(possible){
        if(random(1) > 0.98){
            current = random(thunderBoltImg)
            possible = false
        }
    } else if(frameCount%20 == 0){
        possible = true
        current = null;
    } else{
        image(current, width/2, 0)
    }
}   

