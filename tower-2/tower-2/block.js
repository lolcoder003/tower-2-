class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        

        World.add(world,this.body)

    }
    display()  {
  
    if(this.body.speed < 5){
        rectMode(CENTER)
        fill(171,247,247);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
    else{
    World.remove(world, this.body);         
    push();
    this.Visiblity = this.Visiblity - 1;
    tint(255,this.Visiblity);   
    pop();
           }
          }

    
}