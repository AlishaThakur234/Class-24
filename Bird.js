class Bird {
    constructor (x,y){
        var birdProp = {
            restitution: 0.8,
            friction: 1
        }
        this.body = Bodies.rectangle (x,y,35,35,birdProp);
        World.add (world,this.body );
        

    }

    display(){
    this.body.position.x = mouseX
    this.body.position.y = mouseY
    
    push ();
    strokeWeight (5)
    stroke ("red") 
    translate (this.body.position.x,this.body.position.y)
    rotate (this.body.angle)
    rectMode(CENTER)
    rect(0,0,35,35)
    pop ();

    }
}