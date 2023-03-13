export default class Goal{
    constructor(game){
        // this.ctx = ctx;
        // this.width = width;
        // this.height = height;
        this.game = game;

        this.sourceX = 150;
        this.sourceY = 160;
        this.sourceWidth = 400;
        this.sourceHeight = 360;
        this.x = 1040;
        this.y = 440;
        this.objectWidth = 150;
        this.objectHeight = 145;

        this.image = document.getElementById("goal");
        this.positionX = [170, 560, 810];
        this.positionY = [100, 400];
        this.draw();
    }

    draw(){
        this.game.ctx.strokeStyle = "lightgray";
        this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
        this.game.ctx.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        // this.ctx.drawImage(this.image, this.imageWidth, this.imageHeight, 180, 500, this.positionX[Math.floor(Math.random()*this.positionX.length)], 400, 300, 1000);
        // this.ctx.drawImage(this.image, 0, 0);
    }
}