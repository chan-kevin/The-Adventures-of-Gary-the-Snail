import Frame from "./frame";
import Obstacles from "./obstacles";
import Goal from "./goal";

export default class Gary {
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.x = 10;
        this.image_width = 80;
        this.image_height = 115;
        // this.image_width = 00;
        // this.image_height = 200;
        this.image_num = 0;
        this.image = [document.getElementById("gary"), document.getElementById("gary2"), document.getElementById("gary3")]
        this.drawIt();
    }

    drawIt(){  
        this.ctx.clearRect(0,0,this.width,this.height); 
        new Frame(this.ctx, this.width, this.height);
        new Obstacles(this.ctx, this.width, this.height);
        new Goal(this.ctx, this.width, this.height);
        // this.ctx.fillStyle = "red"; 
        // this.ctx.fillRect(this.x,450,200,100); 
        // this.ctx.drawImage(this.image, this.image_width, this.image_height, 350, 400, this.x, 500, 80, 100);
        this.ctx.drawImage(this.image[this.image_num], this.image_width, this.image_height, 380, 430, this.x, 500, 80, 100);
        // if (this.frame_x < 3) this.frame_x ++;
        // else this.frame_x = 1;
        // if (this.gameFrame % this.staggerFrames == 0){

        setTimeout(() => {
            if (this.image_num < 2) this.image_num ++;
            else this.image_num = 0; 
            // this.x+=5;
            window.requestAnimationFrame(this.drawIt.bind(this));}, "90"
        )
        this.x+=5;
    } 
}