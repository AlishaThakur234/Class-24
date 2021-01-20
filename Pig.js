class Pig {
    constructor (x,y){
        var pigProp = {
            restitution: 0.8,
            friction: 1
        }
        this.body = Bodies.rectangle (x,y,50,50,pigProp);
        World.add (world,this.body );
        

    }

    display(){
    push ();
    strokeWeight (5)
    stroke("lightgreen")
    translate (this.body.position.x,this.body.position.y)
    rotate (this.body.angle)
    rectMode(CENTER)
    rect(0,0,50,50)
    pop ();

    }
}