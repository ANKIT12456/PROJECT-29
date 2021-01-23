class BOX{

    constructor(x,y){

        var options={
            isStatic:true,
            restituition:0.7,
            friction:0.1,
            density:0.1
        }
        this.body=Bodies.rectangle(x,y,20,20,options);
        this.image=loadImage("wood1.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;	
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		imageMode(CENTER);
		image( this.image,0,0,50,50);
		pop();
    }
}