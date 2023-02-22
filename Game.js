class Game {
    constructor(){
    }

    hide(){
        form.startButton.hide();
        form.input.hide();
    }


    start(){
        this.hide()
        // this.characterSelect()
        background(bgImg);
        this.character();
        this.controls(); 
        this.enemies();
    }

  /*  characterSelect() {
        if (gameState == 1) {
            character_select = createSprite(width/2 + 300, height/2)
            character_select.addImage("ArrowSelect", Arrow_selectImg);    
            character_select.addImage("FlashSelect", Flash_selectImg);        
            character_select.addImage("SupergirlSelect", Supergirl_selectImg);
            character_select.addImage("FirestormSelect", Firestorm_selectImg);
            character_select.addImage("AtomSelect", Atom_selectImg);
            character_select.scale = 2;
        }
        drawSprites();
    }    */

character() {
    //sprite.addImage("sprite", )
    
sprite.collide (edges);

if(enemy.collide(sprite) || enemy2.collide(sprite) || enemy3.collide(sprite)) {
    sprite.remove()
}
   
drawSprites();

}

controls() {
    if(keyDown("UP_ARROW")) {

        sprite.velocity.y -= 4;

    }
    sprite.velocity.y += 0.5;

    if(keyDown("RIGHT_ARROW")) {

        sprite.position.x += 4;

    }

    if(keyDown("LEFT_ARROW")) {

        sprite.position.x -= 4;

    }

    console.log(keyDown("UP_ARROW"))

}

    enemies () {
      if(enemy.position.x > width-30 || enemy.position.x < 20){
        enemy.velocity.x *= -1
      }
    
      if(enemy2.position.y > height-30 || enemy2.position.y < 20){
        enemy2.velocity.y *= -1
      }
    
      if(enemy3.position.y > height-30 || enemy3.position.y < 20){
        enemy3.velocity.y *= -1
      }
    
      if ()
    
    }


}