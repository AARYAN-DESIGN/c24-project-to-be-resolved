class Log {
    constructor(x, y,length,height){
        var options = {
            isStatic:true,
		restitution:0.3,
		friction:0.5,
		density:1.2
        }

        this.x=x;
        this.y=y;
        this.length=length;
        this.height=height;
        this.body= Bodies.rectangle(this.x , this.y ,this.length, this.height,options);
        World.add(world, this.body);
   }
   display(){
    var paperpos=this.body.position;

    push()
    translate(paperpos.x,paperpos.y);
    rectMode(CENTER)
    rect(this.x,this.y,this.length,this.height);
    pop()
}
}