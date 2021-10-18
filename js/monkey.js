class Monkey {
    constructor(x,y,width,height){
        var options = {
            restitution: 0.5,
            friction: 0.1,
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/fly.png");
        //this.image = loadImage("sprites/left_swing.png");
        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;
        imageMode(CENTER);

        
            image(this.image, pos.x, pos.y, this.width, this.height);
        


    }


}