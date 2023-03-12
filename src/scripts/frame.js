export default class Frame {
    constructor(game){
        // this.width = width;
        // this.height = height;
        // this.ctx = ctx;
        this.game = game
        this.background = document.getElementById("board");
        this.drawFrames();
    }

    drawFrames(){
        // const background = document.getElementById("board")
        // background.src = '../../assets/image/background.jpg';
        // background.onload = function(){
            // const width = 1000;
            // const height = 500;

        this.game.ctx.drawImage(this.background, 0, 0, this.game.width, this.game.height);
        const x = this.game.width/3;
        const y = this.game.height/2;
        for (let row = 0; row <= this.game.width - x; row += x){
            for (let col = 0; col <= this.game.height - y; col += y){
                this.game.ctx.strokeStyle = "lightgray";
                this.game.ctx.strokeRect(row, col, x, y);
                this.game.ctx.stroke();
            }
            // }
        }
    }
}