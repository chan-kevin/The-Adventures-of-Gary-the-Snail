export default class Event{
    constructor(game){
        this.game = game;
    }

    hover_check(){
        this.game.canvas.addEventListener("mousemove", e => {
            const x = this.game.width/3;
            const y = this.game.height/2;

            //checking if mouse is on:

            //top left frame
            if (
                (e.offsetX > this.game.frame.topLeft[0] && e.offsetX < this.game.frame.topLeft[1]) &&
                (e.offsetY > this.game.frame.topLeft[2] && e.offsetY < this.game.frame.topLeft[3])
            ){ 
                this.game.ctx.strokeStyle = "black";
                this.game.ctx.strokeRect(this.game.frame.topLeft[0], this.game.frame.topLeft[2], x, y);
                this.game.ctx.stroke();
            }

            //top mid frame
            if (
                (e.offsetX > this.game.frame.topMid[0] && e.offsetX < this.game.frame.topMid[1]) &&
                (e.offsetY > this.game.frame.topMid[2] && e.offsetY < this.game.frame.topMid[3])
            ){ 
                this.game.ctx.strokeStyle = "black";
                this.game.ctx.strokeRect(this.game.frame.topMid[0], this.game.frame.topMid[2], x, y);
                this.game.ctx.stroke();
            }

            //top right frame
            if (
                (e.offsetX > this.game.frame.topRight[0] && e.offsetX < this.game.frame.topRight[1]) &&
                (e.offsetY > this.game.frame.topRight[2] && e.offsetY < this.game.frame.topRight[3])
            ){ 
                this.game.ctx.strokeStyle = "black";
                this.game.ctx.strokeRect(this.game.frame.topRight[0], this.game.frame.topRight[2], x, y);
                this.game.ctx.stroke();
            }

            //bot left frame
            if (
                (e.offsetX > this.game.frame.botLeft[0] && e.offsetX < this.game.frame.botLeft[1]) &&
                (e.offsetY > this.game.frame.botLeft[2] && e.offsetY < this.game.frame.botLeft[3])
            ){ 
                this.game.ctx.strokeStyle = "black";
                this.game.ctx.strokeRect(this.game.frame.botLeft[0], this.game.frame.botLeft[2], x, y);
                this.game.ctx.stroke();
            }
            
            //bot mid frame
            if (
                (e.offsetX > this.game.frame.botMid[0] && e.offsetX < this.game.frame.botMid[1]) &&
                (e.offsetY > this.game.frame.botMid[2] && e.offsetY < this.game.frame.botMid[3])
            ){ 
                this.game.ctx.strokeStyle = "black";
                this.game.ctx.strokeRect(this.game.frame.botMid[0], this.game.frame.botMid[2], x, y);
                this.game.ctx.stroke();
            }

            //bot right frame
            if (
                (e.offsetX > this.game.frame.botRight[0] && e.offsetX < this.game.frame.botRight[1]) &&
                (e.offsetY > this.game.frame.botRight[2] && e.offsetY < this.game.frame.botRight[3])
            ){ 
                this.game.ctx.strokeStyle = "black";
                this.game.ctx.strokeRect(this.game.frame.botRight[0], this.game.frame.botRight[2], x, y);
                this.game.ctx.stroke();
            }
        })
    }
}