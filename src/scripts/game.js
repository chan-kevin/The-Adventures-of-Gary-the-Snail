import Frame from "./frame";

export default class SnailGame {
    constructor(ctx){
        this.ctx = ctx;
        this.draw(ctx);
    }

    draw (ctx){
        const background = new Image();
        background.src = '../../assets/image/background.jpeg';
        // const ctx = this.canvas.getContext("2d");
        background.onload = function(){
            console.log(this)
        ctx.drawImage(background,0,0);  
        const width = 1000;
        const height = 500;
        const x = width/3;
        const y = height/2;
        for (let row = 0; row <= width - x; row += x){
            for (let col = 0; col <= height - y; col += y){
                ctx.strokeStyle = "black";
                ctx.strokeRect(row, col, x, y);
                ctx.stroke();
            }
        }
    }


    }

    animate(ctx){
        this.frame.animate(ctx);
    }
}