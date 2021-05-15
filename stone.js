class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.1
      };
      this.body = Bodies.rectangle(100, 10, 50, 50, options);
      this.width = 70;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
    
  
      push();
      translate(pos.x, pos.y);
     
      
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  
