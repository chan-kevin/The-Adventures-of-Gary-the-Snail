export default class Obstacles {
    constructor(game){
        // this.ctx = ctx;
        // this.width = width;
        // this.height = height;
        // 28
        this.game = game;

        this.sourceX = 190;
        this.sourceY = 210;
        this.sourceWidth = 550;
        this.sourceHeight = 500;
        this.x = 620;
        this.y = 400;
        this.objectWidth = 180;
        this.objectHeight = 180;
        this.frame = 1;
        this.maxFrame = 28;

        this.image = document.getElementById("obstacles");
        this.positionX = [170, 560, 810];
        this.positionY = [100, 400];
        // this.draw();
        // this.collision();
    }

    draw(){
        this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
        this.game.ctx.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
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