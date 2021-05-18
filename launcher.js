class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:1,
            stiffness:0.04,
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }
     //attach bodyA to body
    attach(body){
        this.chain.bodyA=body;
    }
    //Update the fly method to set bodyA to null
    fly(){
        this.chain.bodyA = null;
    }

    display(){
        strokeWeight(2);
        stroke("white");
        
        //We only want to use the display() function in launcher if the bodyA is not null.
        if(this.chain.bodyA){
       
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
        
    }
    
}