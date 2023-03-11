export default class Obstacles {
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.image_width = 10;
        this.image_height = 110;
        this.image = document.getElementById("obstacles");
        this.positionX = [170, 560, 810];
        this.positionY = [100, 400];
        this.draw();
    }

    draw(){
        this.ctx.drawImage(this.image, this.image_width, this.image_height, 180, 500, 560, 400, 300, 1000);
        // this.ctx.drawImage(this.image, this.image_width, this.image_height, 180, 500, this.positionX[Math.floor(Math.random()*this.positionX.length)], 400, 300, 1000);
        // this.ctx.drawImage(this.image, 0, 0);
    }
}