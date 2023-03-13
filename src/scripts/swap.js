export default class Swap{
    constructor(game){
        this.game = game;
        this.topLeft = [];
        this.topMid = [];
        this.topRight = [];
        this.botLeft = [];
        this.botMid = [];
        this.botRight = [];
    }

    click(){
        const x = this.game.canvas.width/3;
        const y = this.game.canvas.height/2;

        const xPts = []
        const yPts = []

        for (let row = 0; row <= this.game.canvas.width; row += x){
            xPts.push(row);
        }

        for (let col = 0; col <= this.game.canvas.height; col += y){
            yPts.push(col);
        }

        this.topLeft = [xPts[0], xPts[1], yPts[0], yPts[1]];
        this.topMid = [xPts[1], xPts[2], yPts[0], yPts[1]];
        this.topRight = [xPts[2], xPts[3], yPts[0], yPts[1]];
        this.botLeft = [xPts[0], xPts[1], yPts[1], yPts[2]];
        this.botMid = [xPts[1], xPts[2], yPts[1], yPts[2]];
        this.botRight = [xPts[2], xPts[3], yPts[1], yPts[2]];

        addEventListener("click", e => {
            if (
                (e.offsetX > this.topLeft[0] && e.offsetX < this.topLeft[1]) &&
                (e.offsetY > this.topLeft[2] && e.offsetY < this.topLeft[3])
                // this.frame.ctx.isPointInPath(x, y)
            ){ 
                console.log("hi");
                // this.ctx.strokeStyle = "black";
                // this.ctx.strokeRect(this.topLeft[0], this.topLeft[2], x, y);
                // this.ctx.stroke();
            } 
        })
    }
}