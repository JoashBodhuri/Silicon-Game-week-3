var player, form, game, playerTeam;
var Arrow_selectImg, Flash_selectImg;

var Supergirl_selectImg, Firestorm_selectImg; 
var Atom_selectImg, character_select, sprite, enemy, enemy2, enemy3;
var gameState=0;
var bgImg;


function preload(){
  Arrow_selectImg = loadImage("./assets/Arrow_select.png");
  Flash_selectImg = loadImage("./assets/Flash_select.png");
  Supergirl_selectImg = loadImage("./assets/Supergirl_select.png");
  Firestorm_selectImg = loadImage("./assets/Firestorm_select.png");
  Atom_selectImg = loadImage("./assets/Atom_select.png");
  bgImg = loadImage("./assets/bg.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  sprite = createSprite(width/2 - 120, height/2+200);
  enemy = createSprite(width/2, height/2, 120, 30);
  enemy.velocity.x = 9;
  
  enemy2 = createSprite(width/2 + 300, height/2 + 10);
  enemy2.velocity.y = 4;
 
  enemy3 = createSprite(width/2 - 300, height/2+ 10);
  enemy3.velocity.y = -4;

edges = createEdgeSprites()

  form = new Form()
  form.display() 
  
  game = new Game()
}

function draw(){

  if (gameState == 1) {
    game.start();
  }
  
//console.log(gameState)
}