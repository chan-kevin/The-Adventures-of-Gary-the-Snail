import Frame from "./frame";
import Obstacles from "./obstacles";
import Goal from "./goal";

export default class Gary {
    constructor(game){
        this.game = game;
        // this.ctx = ctx;
        // this.width = width;
        // this.height = height;

        this.sourceX = 80;
        this.sourceY = 115;
        this.sourceWidth = 380;
        this.sourceHeight = 210;
        this.x = 1;
        this.y = 500;
        this.objectWidth = 80;
        this.objectHeight = 50;

        this.image_num = 0;
        this.rightGary = [document.getElementById("gary"), document.getElementById("gary2"), document.getElementById("gary3")]
        this.leftGary = [document.getElementById("gary4"), document.getElementById("gary5"), document.getElementById("gary6")]
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
        // this.ctx.drawImage(this.image, this.sourceX, this.sourceY, 350, 400, this.x, 500, 80, 100);
        // this.ctx.drawImage(this.image[this.image_num], this.sourceX, this.sourceY, 380, 430, this.x, 500, 80, 100);
        if (this.direction === "right") {
            this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
            this.game.ctx.drawImage(this.rightGary[this.image_num], this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        }

        if (this.direction === "left") {
            this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
            this.game.ctx.drawImage(this.leftGary[this.image_num], this.sourceX-20, this.sourceY, this.sourceWidth, this.sourceHeight+10, this.x, this.y, this.objectWidth, this.objectHeight);
        }
        // if (this.frameX < 3) this.frameX ++;
        // else this.frameX = 1;
        // if (this.gameFrame % this.staggerFrames == 0){

        setTimeout(() => {
            if (this.image_num < 2) this.image_num ++;
            else this.image_num = 0;
            // this.x+=5;
            window.requestAnimationFrame(this.draw.bind(this));}, "90"
        )  
        // this.x+=5;
        if (this.game.obstacles.x < (this.x + this.objectWidth)) this.direction = "left";
        if (this.direction === "right"){
            this.x += 5;
            // console.log(this.x);
            if (this.x > this.game.width - this.sourceX) this.direction = "left";
        }
        if (this.direction === "left") {
            this.x -= 5;
            if (this.x <= 0) this.direction = "right";
        }

        // if (this.x <= 0) this.x = 0;
        // if (this.x < this.width - this.imageWidth) this.x+=5;
        // if (this.x > this.width - this.imageWidth) this.x-=5;
    } 
}