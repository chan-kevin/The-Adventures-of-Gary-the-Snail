export default class Frame {
    constructor(ctx, width, height){
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.background = document.getElementById("board");
        this.drawFrames();
    }

    drawFrames(){
        // const background = document.getElementById("board")
        // background.src = '../../assets/image/background.jpg';
        // background.onload = function(){
            // const width = 1000;
            // const height = 500;
        this.ctx.drawImage(this.background, 0, 0, this.width, this.height/2);
        this.ctx.drawImage(this.background, 0, this.height/2, this.width, this.height/2);
        const x = this.width/3;
        const y = this.height/2;
        for (let row = 0; row <= this.width - x; row += x){
            for (let col = 0; col <= this.height - y; col += y){
                this.ctx.strokeStyle = "lightgray";
                this.ctx.strokeRect(row, col, x, y);
                this.ctx.stroke();
            }
            // }
        }
    }
}