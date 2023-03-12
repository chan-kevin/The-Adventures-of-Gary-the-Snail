export default class Ground{
    constructor(game){
        // this.ctx = ctx;
        // this.width = width;
        // this.height = height;
        this.game = game;

        this.sourceX = 0;
        this.sourceY = 30;
        this.sourceWidth = 1471;
        this.sourceHeight = 676;
        this.x = 0;
        this.y = this.game.canvas.height/4;
        this.objectWidth = this.game.canvas.width/3;
        this.objectHeight = this.game.canvas.height/4;

        this.image = [document.getElementById("ground"), document.getElementById("ground2"), document.getElementById("ground3"),
                    document.getElementById("ground4"), document.getElementById("ground5"), document.getElementById("ground6")];
        this.positionX = [170, 560, 810];
        this.positionY = [100, 400];
        this.draw();
    }

    draw(){
        // this.game.ctx.drawImage(this.image, 0, 0);

        // this.image.forEach((img) => {
        // this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
        // this.game.ctx.drawImage(img, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        // })

        this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
        this.game.ctx.drawImage(this.image[0], this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        this.x += this.game.canvas.width/3;

        this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
        this.game.ctx.drawImage(this.image[1], this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        this.x += this.game.canvas.width/3;

        this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
        this.game.ctx.drawImage(this.image[2], this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        this.x = 0;
        this.y += this.game.canvas.height/2;

        this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
        this.game.ctx.drawImage(this.image[3], this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        this.x += this.game.canvas.width/3;

        this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
        this.game.ctx.drawImage(this.image[4], this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        this.x += this.game.canvas.width/3;

        this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
        this.game.ctx.drawImage(this.image[5], this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);

        // this.ctx.drawImage(this.image, this.imageWidth, this.imageHeight, 180, 500, this.positionX[Math.floor(Math.random()*this.positionX.length)], 400, 300, 1000);
        // this.ctx.drawImage(this.image, 0, 0);
    }
}