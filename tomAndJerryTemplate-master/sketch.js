
function preload() {
    //load the images here
    bg=loadImage("garden.png")
    catImage1=loadAnimation("images/cat1.png")
    catImage2=loadAnimation("images/cat2.png","images/cat3.png")
    catImage3=loadAnimation("images/cat4.png")
    mouseImage1=loadAnimation("images/mouse1.png")
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImage3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(800,600);
tom.addAnimation("sleepingTom",catImage1)
tom.scale=0.15
jerry=createSprite(200,600);
jerry.addAnimation("standingjerry",mouseImage1)
jerry.scale=0.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
{
    tom.velocityX=0;
    tom.addAnimation("tomLastImage", tomImg3);
    tom.x =300
    tom.scale=0.2;
    tom.changeAnimation("tomLastImage");
    jerry.addAnimation("jerryLastImage", jerryImg3);
    jerry.scale=0.15;
    jerry.changeAnimation("jerryLastImage");

}
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW)
{
    tom.velocityX=-5
    tom.addAnimation("walkingTom",catImage2)
    tom.changeAnimation("walkingTom")
    jerry.addAnimation("teasingjerry",mouseImage2)
    jerry.changeAnimation("teasingjerry")
}
  //For moving and changing animation write code here


}
