import Frame from "./frame";
import Gary from "./gary";
import Obstacles from "./obstacles";
import Goal from "./goal";

export default class Game {
    // constructor(ctx){
    //     this.ctx = ctx;
    //     this.draw(ctx);
    // }
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        // this.dimension = {width: canvas.width, height: canvas.height}
        this.width = canvas.width;
        this.height = canvas.height;
        this.draw();
    }

    draw (){
        new Frame(this.ctx, this.width, this.height);
        new Gary(this.ctx, this.width, this.height);
        new Obstacles(this.ctx, this.width, this.height);
        new Goal(this.ctx, this.width, this.height);
        // const background = new Image();
        // background.src = '../../assets/image/background.jpg';
        // // background.onload = function(){
        //     // const width = 1000;
        //     // const height = 500;
        // this.ctx.drawImage(background, 0, 0, this.dimension.width, this.dimension.height/2);
        // this.ctx.drawImage(background, 0, this.dimension.height/2, this.dimension.width, this.dimension.height/2);
        // const x = this.dimension.width/3;
        // const y = this.dimension.height/2;
        // for (let row = 0; row <= this.dimension.width - x; row += x){
        //     for (let col = 0; col <= this.dimension.height - y; col += y){
        //         this.ctx.strokeStyle = "lightgray";
        //         this.ctx.strokeRect(row, col, x, y);
        //         this.ctx.stroke();
        //     }
        //     // }
        // }
    } 
}