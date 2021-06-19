class Box {
    constructor(x, y, width, height){
      
        var options = {
            restitution : 0.4,
      friction : 0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        this .visibility= 255

         }
        display(){
            //threshold
            if(this.body.speed<3){
             
                var angle = this.body.angle;
                var pos= this.body.position;
                push();
                translate(pos.x, pos.y);
                rotate(angle);
                rectMode(CENTER);
                rect(0,0,this.width, this.height);
              pop();
              }
             
else{
    World.remove(this.body)
push();  
this.visibility=this.visibility-5;
Tint (255,this.visibility)
rect(999,999,this.width,this.height);
pop();
}
  }           
          
    }
  
  
  