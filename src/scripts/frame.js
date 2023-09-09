import Game from "./game";

export default class Frame {
    constructor(frame, game){
        this.game = game;
        this.frame = frame;
        this.ctx = frame.getContext("2d");
        this.topLeft = [];
        this.topMid = [];
        this.topRight = [];
        this.botLeft = [];
        this.botMid = [];
        this.botRight = [];
        this.strokeStyle = "lightgray";
        this.x = this.frame.width/3;
        this.y = this.frame.height/2;
        this.selectFrame = 0;
        this.draw();
        this.select();
        this.checkStatus();
    }

        checkStatus(){
        if (this.selectFrame === 2) {
            this.selectFrame = 0;
            this.game.pause = true;
        } else if (this.selectFrame === 0) {
            this.game.pause = false;
        } else {
            this.hover();
        }
        requestAnimationFrame(this.checkStatus.bind(this));
    }

    draw(){
        const xPts = []
        const yPts = []

        for (let row = 0; row <= this.frame.width; row += this.x){
            xPts.push(row);
        }

        for (let col = 0; col <= this.frame.height; col += this.y){
            yPts.push(col);
        }

        this.topLeft = [xPts[0], xPts[1], yPts[0], yPts[1]];
        this.topMid = [xPts[1], xPts[2], yPts[0], yPts[1]];
        this.topRight = [xPts[2], xPts[3], yPts[0], yPts[1]];
        this.botLeft = [xPts[0], xPts[1], yPts[1], yPts[2]];
        this.botMid = [xPts[1], xPts[2], yPts[1], yPts[2]];
        this.botRight = [xPts[2], xPts[3], yPts[1], yPts[2]];
        
        for (let row = 0; row <= this.frame.width; row += this.x){
            for (let col = 0; col <= this.frame.height; col += this.y){
                this.ctx.strokeStyle = this.strokeStyle;
                this.ctx.strokeRect(row, col, this.x, this.y);
                this.ctx.stroke();
            }
            // }
        }
    }

    hover(){
        this.frame.addEventListener("mousemove", e => {
            if (this.selectFrame < 1){
                this.ctx.clearRect(0, 0, this.frame.width, this.frame.height);
                for (let row = 0; row <= this.frame.width; row += this.x){
                    for (let col = 0; col <= this.frame.height; col += this.y){
                        this.ctx.strokeStyle = this.strokeStyle;
                        this.ctx.lineWidth = 1;
                        this.ctx.strokeRect(row, col, this.x, this.y);
                        this.ctx.stroke();
                    }
                }
            }
    
            //top left frame
            if (
                (e.offsetX > this.topLeft[0] && e.offsetX < this.topLeft[1]) &&
                (e.offsetY > this.topLeft[2] && e.offsetY < this.topLeft[3]) &&
                (this.selectFrame < 1)
            ){ 
                this.ctx.strokeStyle = "black";
                this.ctx.strokeRect(this.topLeft[0], this.topLeft[2], this.x, this.y);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(0, 0);
            } 
    
            //top mid frame
            if (
                (e.offsetX > this.topMid[0] && e.offsetX < this.topMid[1]) &&
                (e.offsetY > this.topMid[2] && e.offsetY < this.topMid[3]) &&
                (this.selectFrame < 1)
            ){ 
                this.ctx.strokeStyle = "black";
                this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
                this.ctx.stroke();
            }
    
            //top right frame
            if (
                (e.offsetX > this.topRight[0] && e.offsetX < this.topRight[1]) &&
                (e.offsetY > this.topRight[2] && e.offsetY < this.topRight[3]) &&
                (this.selectFrame < 1)
            ){ 
                this.ctx.strokeStyle = "black";
                this.ctx.strokeRect(this.topRight[0], this.topRight[2], this.x, this.y);
                this.ctx.stroke();
            }
    
            //bot left frame
            if (
                (e.offsetX > this.botLeft[0] && e.offsetX < this.botLeft[1]) &&
                (e.offsetY > this.botLeft[2] && e.offsetY < this.botLeft[3]) &&
                (this.selectFrame < 1)
            ){ 
                this.ctx.strokeStyle = "black";
                this.ctx.strokeRect(this.botLeft[0], this.botLeft[2], this.x, this.y);
                this.ctx.stroke();
            }
            
            //bot mid frame
            if (
                (e.offsetX > this.botMid[0] && e.offsetX < this.botMid[1]) &&
                (e.offsetY > this.botMid[2] && e.offsetY < this.botMid[3]) &&
                (this.selectFrame < 1)
            ){ 
                this.ctx.strokeStyle = "black";
                this.ctx.strokeRect(this.botMid[0], this.botMid[2], this.x, this.y);
                this.ctx.stroke();
            }
    
            //bot right frame
            if (
                (e.offsetX > this.botRight[0] && e.offsetX < this.botRight[1]) &&
                (e.offsetY > this.botRight[2] && e.offsetY < this.botRight[3]) &&
                (this.selectFrame < 1)
            ){ 
                this.ctx.strokeStyle = "black";
                this.ctx.strokeRect(this.botRight[0], this.botRight[2], this.x, this.y);
                this.ctx.stroke();
            }
        })
    }

    select(){
        this.frame.addEventListener("click", e => {
    
            //top left frame
            if (
                (e.offsetX > this.topLeft[0] && e.offsetX < this.topLeft[1]) &&
                (e.offsetY > this.topLeft[2] && e.offsetY < this.topLeft[3])
            ){ 
                this.game.pause = true;
                this.selectFrame += 1;
                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = `rgb(73, 100, 133)`;
                this.ctx.strokeRect(this.topLeft[0], this.topLeft[2], this.x, this.y);
                this.ctx.stroke();
            } 
    
            //top mid frame
            if (
                (e.offsetX > this.topMid[0] && e.offsetX < this.topMid[1]) &&
                (e.offsetY > this.topMid[2] && e.offsetY < this.topMid[3])
            ){ 
                this.game.pause = true;
                this.selectFrame += 1;
                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = `rgb(73, 100, 133)`;
                this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
                this.ctx.stroke();
            }
    
            //top right frame
            if (
                (e.offsetX > this.topRight[0] && e.offsetX < this.topRight[1]) &&
                (e.offsetY > this.topRight[2] && e.offsetY < this.topRight[3])
            ){ 
                this.game.pause = true;
                this.selectFrame += 1;
                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = `rgb(73, 100, 133)`;
                this.ctx.strokeRect(this.topRight[0], this.topRight[2], this.x, this.y);
                this.ctx.stroke();
            }
    
            //bot left frame
            if (
                (e.offsetX > this.botLeft[0] && e.offsetX < this.botLeft[1]) &&
                (e.offsetY > this.botLeft[2] && e.offsetY < this.botLeft[3])
            ){ 
                this.game.pause = true;
                this.selectFrame += 1;
                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = `rgb(73, 100, 133)`;
                this.ctx.strokeRect(this.botLeft[0], this.botLeft[2], this.x, this.y);
                this.ctx.stroke();
            }
            
            //bot mid frame
            if (
                (e.offsetX > this.botMid[0] && e.offsetX < this.botMid[1]) &&
                (e.offsetY > this.botMid[2] && e.offsetY < this.botMid[3])
            ){ 
                this.game.pause = true;
                this.selectFrame += 1;
                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = `rgb(73, 100, 133)`;
                this.ctx.strokeRect(this.botMid[0], this.botMid[2], this.x, this.y);
                this.ctx.stroke();
            }
    
            //bot right frame
            if (
                (e.offsetX > this.botRight[0] && e.offsetX < this.botRight[1]) &&
                (e.offsetY > this.botRight[2] && e.offsetY < this.botRight[3])
            ){ 
                this.game.pause = true;
                this.selectFrame += 1;
                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = `rgb(73, 100, 133)`;
                this.ctx.strokeRect(this.botRight[0], this.botRight[2], this.x, this.y);
                this.ctx.stroke();
            }
        })
    }
}