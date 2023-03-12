export default class Goal{
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.source_x = 150;
        this.source_y = 160;
        this.source_width = 400;
        this.source_height = 360;
        this.x = 1040;
        this.y = 440;
        this.object_width = 150;
        this.object_height = 145;
        
        this.image = document.getElementById("goal");
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