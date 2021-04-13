const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var start = false ; 
var r=0 , g=0 , b=0 ;
function preload(){
  polygon_img=loadImage("polygon.png");
}
var add = 80 ;
var add2 = -100 ; 
var add3 = 390 ; 
var score = 0 ;
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390+add,300,250,10);
  stand2 = new Stand(700+add,200,200,10);

  //level one
  block1 = new Block(300+add,275,30,40);
  block2 = new Block(330+add,275,30,40);
  block3 = new Block(360+add,275,30,40);
  block4 = new Block(390+add,275,30,40);
  block5 = new Block(420+add,275,30,40);
  block6 = new Block(450+add,275,30,40);
  block7 = new Block(480+add,275,30,40);
  //level two
  block8 = new Block(330+add,235,30,40);
  block9 = new Block(360+add,235,30,40);
  block10 = new Block(390+add,235,30,40);
  block11 = new Block(420+add,235,30,40);
  block12 = new Block(450+add,235,30,40);
  //level three
  block13 = new Block(360+add,195,30,40);
  block14 = new Block(390+add,195,30,40);
  block15 = new Block(420+add,195,30,40);
  //top
  block16 = new Block(390+add,155,30,40);


  Bblock1 = new Block(300+add3,275+add2,30,40);
  Bblock2 = new Block(330+add3,275+add2,30,40);
  Bblock3 = new Block(360+add3,275+add2,30,40);
  Bblock4 = new Block(390+add3,275+add2,30,40);
  Bblock5 = new Block(420+add3,275+add2,30,40);
  Bblock6 = new Block(450+add3,275+add2,30,40);
  Bblock7 = new Block(480+add3,275+add2,30,40);
  //level two
  Bblock8 = new Block(330+add3,235+add2,30,40);
  Bblock9 = new Block(360+add3,235+add2,30,40);
  Bblock10 = new Block(390+add3,235+add2,30,40);
  Bblock11 = new Block(420+add3,235+add2,30,40);
  Bblock12 = new Block(450+add3,235+add2,30,40);
  //level three
  Bblock13 = new Block(360+add3,195+add2,30,40);
  Bblock14 = new Block(390+add3,195+add2,30,40);
  Bblock15 = new Block(420+add3,195+add2,30,40);
  //top
  Bblock16 = new Block(390+add3,155+add2,30,40);

  var options = {
    density: 1 
  }
  
  // hex = Matter.Bodies.polygon(150, 250, 6, 5 , options);
  hex = Matter.Bodies.circle(150,250, 20 , options);
  World.add(world, hex);

  sling = new SlingShot(hex , {x:150, y:255})
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  detectCollision(hex , block1);
  detectCollision(hex , block2);
  detectCollision(hex , block3);
  detectCollision(hex , block4);
  detectCollision(hex , block5);
  detectCollision(hex , block6);
  detectCollision(hex , block7);
  detectCollision(hex , block8);
  detectCollision(hex , block9);
  detectCollision(hex , block10);
  detectCollision(hex , block11);
  detectCollision(hex , block12);
  detectCollision(hex , block13);
  detectCollision(hex , block14);
  detectCollision(hex , block15);
  detectCollision(hex , block16);

  detectCollision(hex , Bblock1);
  detectCollision(hex , Bblock2);
  detectCollision(hex , Bblock3);
  detectCollision(hex , Bblock4);
  detectCollision(hex , Bblock5);
  detectCollision(hex , Bblock6);
  detectCollision(hex , Bblock7);
  detectCollision(hex , Bblock8);
  detectCollision(hex , Bblock9);
  detectCollision(hex , Bblock10);
  detectCollision(hex , Bblock11);
  detectCollision(hex , Bblock12);
  detectCollision(hex , Bblock13);
  detectCollision(hex , Bblock14);
  detectCollision(hex , Bblock15);
  detectCollision(hex , Bblock16);


  strokeWeight(3);
  stroke(15);
  fill("skyblue");
  Bblock1.display();
  Bblock2.display();
  Bblock3.display();
  Bblock4.display();
  Bblock5.display();
  Bblock6.display();
  Bblock7.display();
  fill("pink");
  Bblock8.display();
  Bblock9.display();
  Bblock10.display();
  Bblock11.display();
  Bblock12.display();
  fill("turquoise");
  Bblock13.display();
  Bblock14.display();
  Bblock15.display();
  r += 1 ; 
  g += 1 ; 
  b += 1 ; 
  if (r >= 255){ r = 0 ;}
  if (g >= 255){ g = 0 ;}
  if (b >= 255){ b = 0 ;}
  fill((r , g , b));
  Bblock16.display();


  ground.display();
  stand1.display();
  
  strokeWeight(3);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  r += 1 ; 
  g += 1 ; 
  b += 1 ; 
  if (r >= 255){ r = 0 ;}
  if (g >= 255){ g = 0 ;}
  if (b >= 255){ b = 0 ;}
  fill((r , g , b));
  block16.display();

  fill('red');
  
  stand2.display();

  sling.display();

  var pos = hex.position;
  var angle = hex.angle;
  push();
  ellipseMode(RADIUS);
  translate(pos.x, pos.y);
  fill('blue');
  stroke('black');
  strokeWeight(4);
  ellipse(0,0,30,this.radius);
  hexagon(0 ,0 ,0.22);
  pop();


  // var angle = hex.angle;
  // push();
  // translate(hex.position.x, hex.position.y);
  // rotate(angle);
  // imageMode(CENTER);
  // image(polygon_img , 0,0, 50,50 );
  // pop();

  textSize(35);
  strokeWeight(2);
  fill('purple');
  text("Score : " + score , width/2-20 , 50);
  if (start){
    textSize(20);
    fill("blue");
    text("PRESS SPACE FOR A SECOND CHANCE !!",20,20)
  }
  else {
    fill(0);
    text("DRAG AND RELEASE THE BALL TO DESTROY THE BOXES", 150, 385)
  }
}

function mouseDragged(){
  Matter.Body.setPosition(hex, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  start = true ; 
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    start = false ; 
    sling.attach(hex);

    score = 0 ;

    block1 = new Block(300+add,275,30,40);
    block2 = new Block(330+add,275,30,40);
    block3 = new Block(360+add,275,30,40);
    block4 = new Block(390+add,275,30,40);
    block5 = new Block(420+add,275,30,40);
    block6 = new Block(450+add,275,30,40);
    block7 = new Block(480+add,275,30,40);
    //level two
    block8 = new Block(330+add,235,30,40);
    block9 = new Block(360+add,235,30,40);
    block10 = new Block(390+add,235,30,40);
    block11 = new Block(420+add,235,30,40);
    block12 = new Block(450+add,235,30,40);
    //level three
    block13 = new Block(360+add,195,30,40);
    block14 = new Block(390+add,195,30,40);
    block15 = new Block(420+add,195,30,40);
    //top
    block16 = new Block(390+add,155,30,40);
  
  
    Bblock1 = new Block(300+add3,275+add2,30,40);
    Bblock2 = new Block(330+add3,275+add2,30,40);
    Bblock3 = new Block(360+add3,275+add2,30,40);
    Bblock4 = new Block(390+add3,275+add2,30,40);
    Bblock5 = new Block(420+add3,275+add2,30,40);
    Bblock6 = new Block(450+add3,275+add2,30,40);
    Bblock7 = new Block(480+add3,275+add2,30,40);
    //level two
    Bblock8 = new Block(330+add3,235+add2,30,40);
    Bblock9 = new Block(360+add3,235+add2,30,40);
    Bblock10 = new Block(390+add3,235+add2,30,40);
    Bblock11 = new Block(420+add3,235+add2,30,40);
    Bblock12 = new Block(450+add3,235+add2,30,40);
    //level three
    Bblock13 = new Block(360+add3,195+add2,30,40);
    Bblock14 = new Block(390+add3,195+add2,30,40);
    Bblock15 = new Block(420+add3,195+add2,30,40);
    //top
    Bblock16 = new Block(390+add3,155+add2,30,40);


  }
}

function detectCollision(a  ,b ){
  pos1 = a.position ; 
  pos2 = b.body.position ;

  var distance = dist(pos2.x , pos2.y , pos1.x , pos1.y);
  // console.log(distance);
  if (distance <= 45 && b.done != true){
    score += Math.floor( Math.random() * 51 );
    b.boom_score(pos2.x , pos2.y , score);
    b.done = true;
    b.remove();
  }
}
function hexagon(transX, transY, s) {
  stroke(255);
  strokeWeight(5);
  fill('rgba(255, 255, 100, .25)');
  push();
  translate(transX, transY);
  scale(s);
  beginShape();
	vertex(-75, -130);
	vertex(75, -130);
	vertex(150, 0);
	vertex(75, 130);
  vertex(-75, 130);
	vertex(-150, 0);
	endShape(CLOSE); 
	pop();
}