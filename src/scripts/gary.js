import Frame from "./frame";
import Obstacles from "./obstacles";
import Goal from "./goal";

export default class Gary {
    constructor(ctx, width, height){
        // this.game = game;
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.source_x = 80;
        this.source_y = 115;
        this.source_width = 380;
        this.source_height = 210;
        this.x = 0;
        this.y = 500;
        this.object_width = 80;
        this.object_height = 50;

        this.image_num = 0;
        this.image = [document.getElementById("gary"), document.getElementById("gary2"), document.getElementById("gary3")]
        this.drawIt();
        this.direction = "right";
    }

    drawIt(){  
        this.ctx.clearRect(0,0,this.width,this.height); 
        new Frame(this.ctx, this.width, this.height);
        new Obstacles(this.ctx, this.width, this.height);
        new Goal(this.ctx, this.width, this.height);
        // this.ctx.fillStyle = "red"; 
        // this.ctx.fillRect(this.x,450,200,100); 
        // this.ctx.drawImage(this.image, this.source_x, this.source_y, 350, 400, this.x, 500, 80, 100);
        // this.ctx.drawImage(this.image[this.image_num], this.source_x, this.source_y, 380, 430, this.x, 500, 80, 100);
        this.ctx.strokeRect(this.x, this.y, this.object_width, this.object_height);
        this.ctx.drawImage(this.image[this.image_num], this.source_x, this.source_y, this.source_width, this.source_height, this.x, this.y, this.object_width, this.object_height);
        // if (this.frame_x < 3) this.frame_x ++;
        // else this.frame_x = 1;
        // if (this.gameFrame % this.staggerFrames == 0){

        setTimeout(() => {
            if (this.image_num < 2) this.image_num ++;
            else this.image_num = 0;
            // this.x+=5;
            window.requestAnimationFrame(this.drawIt.bind(this));}, "90"
        )
        // this.x+=5;
        if (Obstacles.x < this.x + this.object_width) this.direction = "left";
        if (this.direction === "right"){
            this.x += 5;
            // console.log(this.x);
            if (this.x > this.width - this.source_x) this.direction = "left";
        }
        if (this.direction === "left") {
            this.x -= 5;
            if (this.x <= 0) this.direction = "right";
        }

        // if (this.x <= 0) this.x = 0;
        // if (this.x < this.width - this.image_width) this.x+=5;
        // if (this.x > this.width - this.image_width) this.x-=5;
    } 
}