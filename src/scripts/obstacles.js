export default class Obstacles {
    constructor(game){
        // this.ctx = ctx;
        // this.width = width;
        // this.height = height;
        // 28
        this.game = game;
        this.fps = 5;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.frame = 0;
        this.maxFrame = 50;

        this.sourceX = 190;
        this.sourceY = 210;
        this.sourceWidth = 550;
        this.sourceHeight = 500;
        this.x = 620;
        this.y = 400;
        this.objectWidth = 180;
        this.objectHeight = 180;

        this.image = document.getElementById("obstacles");
        this.positionX = [170, 560, 810];
        this.positionY = [100, 400];
        // this.draw();
        // this.collision();
    }

    update(deltaTime){
        if (this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
            if (this.frame < this.maxFrame) this.frame++;
            else this.frame = 0;
            // console.log(this.game.gary.x)
            // if (this.x < (this.game.gary.x + this.objectWidth)) {
            //     // console.log(this.frame)
            //     this.game.ctx.drawImage(this.image, this.frame * this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
            // }
        } else {
            this.frameTimer += deltaTime;
        }

        // if (this.x < (this.game.gary.x + this.objectWidth)) {
        //     while (this.frame < this.maxFrame){
        //     this.game.ctx.drawImage(this.image, this.frame * this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        //     this.game.obstacles.frame ++;
        //     // console.log(this.game.obstacles.frame)
        //     }
        // }
    }

    draw(){
        this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
        this.game.ctx.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        if (this.x < (this.game.gary.x + this.objectWidth)) {
            //     console.log(this.frame)
            this.game.ctx.drawImage(this.image, this.frame * this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        }
        // this.ctx.drawImage(this.image, this.imageWidth, this.imageHeight, 180, 500, this.positionX[Math.floor(Math.random()*this.positionX.length)], 400, 300, 1000);
        // this.ctx.drawImage(this.image, 0, 0);
    }

    // collision(){
    //     if ((this.game.gary.x + this.game.gary.objectWidth) > this.x){
    //         console.log("hit");
            // while (this.frame < this.maxFrame){
                // this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
            //     this.game.ctx.drawImage(this.image, this.frame * this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
            //     this.frame ++;
            // }
        // }
    // }
}