class createDrop{
    constructor(x, y){
        
        this.body = Bodies.circle(x, y, 5);
        Matter.World.add(world, this.body);

    }

    update(){
        
        if(this.body.position.y > height){
            
            Matter.Body.setPosition(this.body, {x: random(width), y : 0});

        }
    }

    display(){
       
        var pos = this.body.position
        noStroke();
        fill(0, 100, 255);
        ellipse(pos.x, pos.y, 7);

    }
}