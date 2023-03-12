import Frame from "./frame";
import Obstacles from "./obstacles";
import Goal from "./goal";

export default class Gary {
    constructor(game){
        this.game = game;
        // this.ctx = ctx;
        // this.width = width;
        // this.height = height;

        this.source_x = 80;
        this.source_y = 115;
        this.source_width = 380;
        this.source_height = 210;
        this.x = 1;
        this.y = 500;
        this.object_width = 80;
        this.object_height = 50;

        this.image_num = 0;
        this.right_gary = [document.getElementById("gary"), document.getElementById("gary2"), document.getElementById("gary3")]
        this.left_gary = [document.getElementById("gary4"), document.getElementById("gary5"), document.getElementById("gary6")]
        this.draw();
        this.direction = "right";
    }

    draw(){  
        this.game.ctx.clearRect(0,0,this.game.width,this.game.height); 
        new Frame(this.game);
        new Obstacles(this.game);
        new Goal(this.game);
        // this.ctx.fillStyle = "red"; 
        // this.ctx.fillRect(this.x,450,200,100); 
        // this.ctx.drawImage(this.image, this.source_x, this.source_y, 350, 400, this.x, 500, 80, 100);
        // this.ctx.drawImage(this.image[this.image_num], this.source_x, this.source_y, 380, 430, this.x, 500, 80, 100);
        if (this.direction === "right") {
            this.game.ctx.strokeRect(this.x, this.y, this.object_width, this.object_height);
            this.game.ctx.drawImage(this.right_gary[this.image_num], this.source_x, this.source_y, this.source_width, this.source_height, this.x, this.y, this.object_width, this.object_height);
        }

        if (this.direction === "left") {
            this.game.ctx.strokeRect(this.x, this.y, this.object_width, this.object_height);
            this.game.ctx.drawImage(this.left_gary[this.image_num], this.source_x-20, this.source_y, this.source_width, this.source_height+10, this.x, this.y, this.object_width, this.object_height);
        }
        // if (this.frame_x < 3) this.frame_x ++;
        // else this.frame_x = 1;
        // if (this.gameFrame % this.staggerFrames == 0){

        setTimeout(() => {
            if (this.image_num < 2) this.image_num ++;
            else this.image_num = 0;
            // this.x+=5;
            window.requestAnimationFrame(this.draw.bind(this));}, "90"
        )  
        // this.x+=5;
        if (this.game.obstacles.x < (this.x + this.object_width)) this.direction = "left";
        if (this.direction === "right"){
            this.x += 5;
            // console.log(this.x);
            if (this.x > this.game.width - this.source_x) this.direction = "left";
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