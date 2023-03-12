export default class Goal{
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.image_width = 150;
        this.image_height = 160;
        this.image = document.getElementById("goal");
        this.positionX = [170, 560, 810];
        this.positionY = [100, 400];
        this.draw();
    }

    draw(){
        this.ctx.strokeRect(1040, 440, 150, 145);
        this.ctx.drawImage(this.image, this.image_width, this.image_height, 400, 360, 1040, 440, 150, 145);
        // this.ctx.drawImage(this.image, this.image_width, this.image_height, 180, 500, this.positionX[Math.floor(Math.random()*this.positionX.length)], 400, 300, 1000);
        // this.ctx.drawImage(this.image, 0, 0);
    }
}