var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = []


var divisionHeight=300;
var score = 0;
var particle; 
var turn = 0
var count =0;
var gameState= "start";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");


  textSize(20)

  text("Score : "+score,20,30);
  text("100",10,500);
  text("100",100,500);
  text("100",200,500);
  text("100",260,500);
  text("500",330,500);
  text("500",400,500);
  text("500",490,500);
  text("500",550,500)

  
  

  Engine.update(engine);
  
  if(particle !== null){
    
    particle.display();
        
    if (particle.body.position.y>760)
    {
          if (particle.body.position.x < 300) 
          {
              score=score+100;      
              particle=null;
              if ( count>= 5) gameState = "end";                          
          }

          else if (particle.body.position.x >300 )
              {
                    score = score + 500;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
        }
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}


function mousePressed(){
  if(gameState !== "end"){
  count++
    particle = new Particle(mouseX, 10,10,10)
  }
}