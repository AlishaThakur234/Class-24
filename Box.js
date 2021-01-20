class Box {
    constructor (x,y){
        var boxProp = {
            restitution: 0.8,
            friction: 1
        }
        this.body = Bodies.rectangle (x,y,70,70,boxProp);
        World.add (world,this.body );
        

    }

    display(){
    push ();
    strokeWeight (5)
    stroke("yellow")
    translate (this.body.position.x,this.body.position.y)
    rotate (this.body.angle)
    rectMode(CENTER)
    rect(0,0,70,70)
    pop ();

    }
}