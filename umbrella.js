class Umbrella{
    constructor(x, y){
        this.body = Bodies.circle(x, y, 100, {isStatic:true})
        Matter.World.add(world, this.body)
    }

    display(){
        var limit = 40;
        var change = limit/8;
        switch(frameCount % limit){
            case 0 : img = walkingBoyImg[7]; break;
            case change : img = walkingBoyImg[6]; break;
            case change*2 : img = walkingBoyImg[5]; break;
            case change*3 : img = walkingBoyImg[4]; break;
            case change*4 : img = walkingBoyImg[3]; break;
            case change*5 : img = walkingBoyImg[2]; break;
            case change*6 : img = walkingBoyImg[1]; break;
            case change*7 : img = walkingBoyImg[0]; break;
            default : img = img;
        }
    
    }

}