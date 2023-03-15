export default class Rock3 {
    constructor(game){
        // this.ctx = ctx;
        // this.width = width;
        // this.height = height;
        // 28
        this.game = game;
        // this.fps = 100;
        this.fps = 30
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.frame = 0;
        this.maxFrame = 0; //27

        this.sourceX = 0;
        this.sourceY = 120;
        // this.sourceWidth = 590;
        this.sourceWidth = 642;
        this.sourceHeight = 500;
        this.x = 820;
        this.y = 80;
        // this.x = x;
        // this.y = y;
        this.boxX = 655; //want to hit
        this.objectWidth = 180;
        this.objectHeight = 180;

        this.image = document.getElementById("rock");
        // this.draw();
        // this.collision();
    }

    update(){
        this.collision();
            if (this.frame < this.maxFrame) this.frame++;
            if (this.frame === this.maxFrame) {
                this.maxFrame = 0;
                this.frame = 0;
            }
    }
    // update(deltaTime){
    //     // this.collision();
    //     if (this.frameTimer > this.frameInterval){
    //         this.frameTimer = 0;

    //         // this.collision();
    //         // console.log(this.frameTimer)
    //         this.collision();
    //         if (this.frame < this.maxFrame) this.frame++;
    //         if (this.frame === this.maxFrame) {
    //             this.maxFrame = 0;
    //             this.frame = 0;
    //         }
    //     } else {
    //         this.frameTimer += deltaTime;
    //     }
    // }

    draw(){
        this.game.ctx.drawImage(this.image, this.frame * (this.sourceX + this.sourceWidth), this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
    }

    collision(){
        if (
            ((this.game.gary.x + this.game.gary.objectWidth) > this.x + 35) &&
            ((this.x + 35 + this.objectWidth) > this.game.gary.x) &&
            (this.y < (this.game.gary.y + this.game.gary.objectHeight)) &&
            ((this.y + this.objectHeight) > this.game.gary.y)
            ){
            // for (let frame = 0; frame < this.maxFrame; frame ++){
            // this.animate(frame);
            // }
            this.maxFrame = 27;
            }
            // console.log("hit");
            // this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
            // this.game.ctx.drawImage(this.image, this.frame * (this.sourceX + this.sourceWidth), this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        
    }
}