export default class Obstacles {
    constructor(game){
        // this.ctx = ctx;
        // this.width = width;
        // this.height = height;
        this.game = game;

        this.sourceX = 10;
        this.sourceY = 110;
        this.sourceWidth = 130;
        this.sourceHeight = 95;
        this.x = 560;
        this.y = 400;
        this.objectWidth = 220;
        this.objectHeight = 180;

        this.image = document.getElementById("obstacles");
        this.positionX = [170, 560, 810];
        this.positionY = [100, 400];
        this.draw();
    }

    draw(){
        this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
        this.game.ctx.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        // this.ctx.drawImage(this.image, this.imageWidth, this.imageHeight, 180, 500, this.positionX[Math.floor(Math.random()*this.positionX.length)], 400, 300, 1000);
        // this.ctx.drawImage(this.image, 0, 0);
    }
}