export default class Jellyfish2 {
    constructor(game){
        this.game = game;

        // this.fps = 20;
        // this.fps = 30;
        // this.frameInterval = 1000/this.fps;
        // this.frameTimer = 0;
        this.frame = 0;
        this.maxFrame = 1; //27

        this.sourceX = 0;
        this.sourceY = 0;
        // this.sourceWidth = 590;
        this.sourceWidth = 40;
        this.sourceHeight = 30;
        // this.x = 10;
        // this.x = 350;
        this.x = 990;
        this.y = 450;
        this.objectWidth = 60;
        this.objectHeight = 60;

        this.image = document.getElementById("jellyfish");
    }

    // update(deltaTime){
    update(){
        // if (this.frameTimer > this.frameInterval){
        //     this.frameTimer = 0;

            this.collision();
            if (this.frame < this.maxFrame) this.frame++;
            else this.frame = 0;
            // setTimeout(() => {this.maxFrame = 1;}, 5000)
            // this.maxFrame = 1;
            
            // if (this.frame === this.maxFrame) {
            //     this.maxFrame = 1;
            //     this.frame = 0;
            // }
        // } else {
        //     this.frameTimer += deltaTime;
        // }
    }

    // update(){
    //     this.collision();
    //     if (this.frame < this.maxFrame) this.frame++;
    //     else this.frame = 0;
    // }

    draw(){
        // this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
        this.game.ctx.drawImage(this.image, this.frame * (this.sourceX + this.sourceWidth), this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
    }

    collision(){
        if (
            (this.game.gary.x < (this.x + this.objectWidth)) &&
            ((this.game.gary.x + this.game.gary.objectWidth) > this.x) &&
            (this.game.gary.y < (this.y + this.objectHeight)) &&
            ((this.game.gary.y + this.game.gary.objectHeight) > this.y)
            ){
            this.maxFrame = 3;
            // console.log("hi")
        }
    }
}