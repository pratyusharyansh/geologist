class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.1
      };
      this.body = Bodies.rectangle(500, 10, 50, 50, options);
      this.width = 150;
      this.height = 100;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
    
  
      push();
      translate(pos.x, pos.y);
     
      strokeWeight(5);
      stroke('white')
      fill('silver')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  
