var bgIMG,bg1,bg2,bg3,bg4,bg5,bg6,bg7,bgIMG2,bg8;
var door,doorimg1,doorimg2;
var gamestate = "start";
var name,nameb,genderb,greeting,genderg;
var gender = "n";
var witch,witchimg;
var drops;
var boy,boyr,girl,girlr;
var ins,enter2;
var s,stairs;

function preload() {

bgIMG = loadImage("images/gif1.jpg");   

witchimg = loadImage("images/witch.png");

dropsi = loadImage("images/blood.png");

girl = loadImage("images/girl1.png");
girlr = loadAnimation("images/girl1.png","images/girl2.png");

boy = loadImage("images/boy1.png");
boyr = loadAnimation("images/boy1.png","images/boy2.png");

ins = loadImage("images/ins.png");
 
bg1 = loadImage("images/gif2.jpg");

bg2 = loadImage("images/gif3.jpg");

bg3 = loadImage("images/gif4.jpg");

bg4 = loadImage("images/gif5.jpg");

bg5 = loadImage("images/gif6.jpg");

bg6 = loadImage("images/gif7.jpg");

bg7 = loadImage("images/gif8.jpg");

bg8 = loadImage("images/staircase.png");
}

function setup(){

createCanvas(displayWidth,displayHeight);

    witch = createSprite(0,displayHeight/10);
    witch.addImage(witchimg);
    witch.visible = false;

s = createSprite(displayWidth/2,0,5,5);

    player = createSprite(0,0,5,5);
    player.scale = 0.5;

    t = createSprite(displayWidth/2+5,displayHeight/2+400,500,50);
    t.visible = false;

    nameb = createInput("NAME");
    nameb.position(displayWidth/2-60,displayHeight/2+280);
    name = nameb.value();

    genderb = createButton("Male");
    genderb.position(displayWidth/2-60,displayHeight/2+310);
    genderb.mousePressed(()=>{

gender = "m";

    })

    genderg = createButton("Female");
    genderg.position(displayWidth/2,displayHeight/2+310);
    genderg.mousePressed(()=>{

        gender = "f";
        
            })
    
   
    enter = createButton("ENTER");
    enter.position(displayWidth/2-60,displayHeight/2+350);
    enter.mousePressed(()=>{

    nameb.hide();
    enter.hide();
    genderb.hide();
    genderg.hide();
    if(gender == "f"){

        player.addImage(girl);
                    
        }
        
        else if(gender == "m"){
        
        player.addImage(boy);
        
        }            
     witch.visible = true;
     witch.velocityX = 6;
     witch.velocityY = 1;
     player.x = witch.x+50;
     player.y = witch.y+100;
     player.velocityX = 6;
     player.velocityY = 1;

    })

}

function draw(){

    background(bgIMG);

    if(witch.x > displayWidth/2){

        witch.velocityY = -1;

        player.velocityX = 0;
        player.velocityY = 3;
    }

    player.collide(t);

    if(witch.x > displayWidth+20 && gamestate == "start"){

     background(ins);
     enter2 = createButton("PLAY");
    enter2.position(displayWidth/2-500,displayHeight/2+250);
    enter2.mousePressed(()=>{

    s.velocityY = 5;
    s.visible = false;
    player.visible = false;

    })



}
if(s.y >= displayHeight/8){

        background(bg1);
        
        }
        
        if(s.y >= displayHeight/7){
        
            background(bg2);
            
            }
        
        if(s.y >= displayHeight/6){
        
        background(bg3);
                
        }
        
        if(s.y >= displayHeight/5){
        
        background(bg4);
                    
        }
        
        if(s.y >= displayHeight/4){
        
        background(bg5);
                        
        }
        
        if(s.y >= displayHeight/3){
        
        background(bg6);
                            
        }
        
        if(s.y >= displayHeight/2){
        
        background(bg7);
                              
        }

        if(s.y >= displayHeight-20){
        
            gamestate = "play";
            enter2.hide();
                                  
            }

if(witch.x < displayWidth+20 ){

if(frameCount%20==0){


        drops = createSprite(displayWidth/2+200,displayHeight-700);
        drops.addImage(dropsi);
        drops.scale = 0.2;
        drops.velocityY = 2;
        drops.x = Math.round(random (displayWidth/2+200,displayWidth/2+1000));
        drops.lifetime = 100;
    }
        }

        if(gamestate == "play"){

            s.destroy();
            stairs = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
            stairs.addImage(bg8);
            stairs.velocityY = 4;
            bg8.resize(displayWidth,displayHeight);
            
            //if(stairs.y < displayHeight/2){
//
//            stairs.y = displayHeight/2;

//            }

        }

    drawSprites();

    if(witch.x < displayWidth+20){
    textSize(50);
    stroke ("red");
    fill("white");
    textFont("Algerian");
    text ("UP THE STAIRCASE",displayWidth/2+200,displayHeight-700);
    }


    
}