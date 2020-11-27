class Bob {
    constructor(x, y) {
      var options = {
  
          restitution:1,
          friction:0,
          density:7.8
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(this.x, this.y,25,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(1);
      fill("red");
      ellipse(0, 0, 50.4,50.4);
      pop();
    }
  };