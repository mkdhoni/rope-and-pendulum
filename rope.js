class Rope{
    constructor(bodyA,bodyB){
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness = 0.04,
        length = 10
    
    
    }
    this.rope = Constraint.create(options)
    World.add(World,this.rope);
    }
}