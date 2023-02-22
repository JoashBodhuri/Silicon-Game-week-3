class Form {
    constructor() {
        this.input = createInput("").attribute("placeholder", "Enter Your Name")
        this.startButton = createButton("Enter Match");
    }

    positioning() {
        this.input.position(width/2, height/2 + 60);
        this.startButton.position(width/2, height/2 - 60);
    }

    styling() {
    this.input.class("inputStyle");
        this.startButton.class("customButton");
    }

    handleMousePressed() {
        this.startButton.mousePressed(() =>{
            playerTeam = this.input.value();
            gameState = 1;
        })
    }

    display() {
        this.positioning();
        this.handleMousePressed();
        this.styling();
    }

}