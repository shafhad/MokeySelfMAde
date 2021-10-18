class Circle {
    constructor(x,y,radius){
        var options = {
            restitution: 0.4,
            friction: 0.2,
            isStatic: true
        }

        this.body = Bodies.circle(x, y, radius, options);
        
        this.radius = radius;
        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;
        ellipse(RADIUS);

        
            ellipse(pos.x, pos.y, this.radius);
        
        


    }


}