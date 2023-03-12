// import Frame from "./frame";
// import Obstacles from "./obstacles";
// import Goal from "./goal";
// import Ground from "./ground";

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
        // this.draw();
        this.direction = "right";
    }

    update(){
        if (this.direction === "right") this.x++;
        else if (this.direction === "left") this.x--;

        if (this.image_num < 2) this.image_num ++;
        else this.image_num = 0;
    }

    draw(){  
        // this.game.ctx.clearRect(0,0,this.game.width,this.game.height); 
        // new Frame(this.game);
        // new Ground(this.game);
        // new Obstacles(this.game);
        // new Goal(this.game);

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

        // setTimeout(() => {
        //     if (this.image_num < 2) this.image_num ++;
        //     else this.image_num = 0;
        //     // this.x+=5;
        //     window.requestAnimationFrame(this.draw.bind(this));}, "60"
        // )  

        // this.x+=5;
        if (this.game.obstacles.x < (this.x + this.objectWidth)) {
            this.direction = "left";
            while (this.game.obstacles.frame < this.game.obstacles.maxFrame){
            this.game.ctx.drawImage(this.game.obstacles.image, this.game.obstacles.frame * this.game.obstacles.sourceX, this.game.obstacles.sourceY, this.game.obstacles.sourceWidth, this.game.obstacles.sourceHeight, this.game.obstacles.x, this.game.obstacles.y, this.game.obstacles.objectWidth, this.game.obstacles.objectHeight);
            this.game.obstacles.frame ++;
            // console.log(this.game.obstacles.frame)
            }
        }
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