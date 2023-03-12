export default class Obstacles {
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.source_x = 10;
        this.source_y = 110;
        this.source_width = 130;
        this.source_height = 95;
        this.x = 560;
        this.y = 400;
        this.object_width = 220;
        this.object_height = 180;
        
        this.image = document.getElementById("obstacles");
        this.positionX = [170, 560, 810];
        this.positionY = [100, 400];
        this.draw();
    }

    draw(){
        this.ctx.strokeRect(this.x, this.y, this.object_width, this.object_height);
        this.ctx.drawImage(this.image, this.source_x, this.source_y, this.source_width, this.source_height, this.x, this.y, this.object_width, this.object_height);
        // this.ctx.drawImage(this.image, this.image_width, this.image_height, 180, 500, this.positionX[Math.floor(Math.random()*this.positionX.length)], 400, 300, 1000);
        // this.ctx.drawImage(this.image, 0, 0);
    }
}