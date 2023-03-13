export default class Swap{
    constructor(game){
        this.game = game;
        this.topLeft = [];
        this.topMid = [];
        this.topRight = [];
        this.botLeft = [];
        this.botMid = [];
        this.botRight = [];
        this.selectFrame = 0;
        this.box1 = {};
        this.box2 = {};
        this.x = this.game.canvas.width/3;
        this.y = this.game.canvas.height/2;
    }

    // checkStatus(){
    //     if (this.selectFrame === 2) this.selectFrame = 0;
    //     requestAnimationFrame(this.checkStatus.bind(this));
    // }

    click(){
        const xPts = []
        const yPts = []

        for (let row = 0; row <= this.game.canvas.width; row += this.x){
            xPts.push(row);
        }

        for (let col = 0; col <= this.game.canvas.height; col += this.y){
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
                this.selectFrame += 1;
                if (
                    (this.game.gary.x > this.topLeft[0] && this.game.gary.x < this.topLeft[1])
                ){
                    this.box1[gary] = this.game.gary.x;
                }

                if (
                    (this.game.rock.x > this.topLeft[0] && this.game.rock.x < this.topLeft[1])
                ){
                    this.box1[rock] = this.game.rock.x;
                }

                if (
                    (this.game.jellyfish.x > this.topLeft[0] && this.game.jellyfish.x < this.topLeft[1])
                ){
                    this.box1[jellyfish] = this.game.jellyfish.x;
                }
                // if (this.selectFrame === 1){
                //     if (this.game.gary){}
                // }
                // this.ctx.strokeStyle = "red";
                // this.ctx.strokeRect(this.topLeft[0], this.topLeft[2], this.x, this.y);
                // this.ctx.stroke();
            } 
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topLeft[0], this.topLeft[2], this.x, this.y);
            // this.ctx.stroke();
            // }
    
            //top mid frame
            if (
                (e.offsetX > this.topMid[0] && e.offsetX < this.topMid[1]) &&
                (e.offsetY > this.topMid[2] && e.offsetY < this.topMid[3])
            ){ 
                this.selectFrame += 1;
                // this.ctx.strokeStyle = "red";
                // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
                // this.ctx.stroke();
            }
            // this.ctx.clearRect(0, 0, this.frame.width, this.frame.height);
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
            // }
    
            //top right frame
            if (
                (e.offsetX > this.topRight[0] && e.offsetX < this.topRight[1]) &&
                (e.offsetY > this.topRight[2] && e.offsetY < this.topRight[3])
            ){ 
                this.selectFrame += 1;
                // this.ctx.strokeStyle = "red";
                // this.ctx.strokeRect(this.topRight[0], this.topRight[2], this.x, this.y);
                // this.ctx.stroke();
            }
            // this.ctx.clearRect(0, 0, this.frame.width, this.frame.height);
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
            // }
    
            //bot left frame
            if (
                (e.offsetX > this.botLeft[0] && e.offsetX < this.botLeft[1]) &&
                (e.offsetY > this.botLeft[2] && e.offsetY < this.botLeft[3])
            ){ 
                this.selectFrame += 1;
                // this.ctx.strokeStyle = "red";
                // this.ctx.strokeRect(this.botLeft[0], this.botLeft[2], this.x, this.y);
                // this.ctx.stroke();
            }
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
            
            //bot mid frame
            if (
                (e.offsetX > this.botMid[0] && e.offsetX < this.botMid[1]) &&
                (e.offsetY > this.botMid[2] && e.offsetY < this.botMid[3])
            ){ 
                this.selectFrame += 1;
                // this.ctx.strokeStyle = "red";
                // this.ctx.strokeRect(this.botMid[0], this.botMid[2], this.x, this.y);
                // this.ctx.stroke();
            }
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
    
            //bot right frame
            if (
                (e.offsetX > this.botRight[0] && e.offsetX < this.botRight[1]) &&
                (e.offsetY > this.botRight[2] && e.offsetY < this.botRight[3])
            ){ 
                this.selectFrame += 1;
                // this.ctx.strokeStyle = "red";
                // this.ctx.strokeRect(this.botRight[0], this.botRight[2], this.x, this.y);
                // this.ctx.stroke();
            }
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
    
            // for (let row = 0; row <= this.game.width; row += x){
            //     for (let col = 0; col <= this.game.height; col += y){
            //         this.game.ctx.strokeStyle = this.strokeStyle;
            //         this.game.ctx.strokeRect(row, col, this.x, this.y);
            //         // (row,col), (row+x,col), (row, col+y), (row+x, col+y)
            //         // (row,col,row+x,col+y)
            //         this.game.ctx.stroke();
            //     }
            //     // }
            // }
        })
    }
}