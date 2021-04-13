class Block{
    constructor(x, y, width, height) {
        var options = {
            isStatic : false,
            friction : 0.1 , 
            density : 0.5   
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.done = false;
        this.score_x , this.score_y = -10 , -10 ; 
        this.score_y_move = 0 ; 
        this.text_size = 10; 
        this.bonus = '+ 0' ; 
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if (this.done && this.score_y_move >= -100 ) { 
          this.score_y_move -= 1.5 ;
          this.text_size += 0.3;
          fill(255,0,0);
          textSize(this.text_size);
          text('+ ' + this.bonus , this.score_x,this.score_y + this.score_y_move);
        }
        if (this.done == false) { 
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }
      }
      boom_score(x,y,bonus){
        this.score_x = x ; 
        this.score_y = y;
        this.bonus = bonus ;
      }
      remove(){
        World.remove(world , this.body);
      }
}
