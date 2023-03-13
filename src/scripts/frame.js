export default class Frame {
    constructor(frame, game){
        // this.width = width;
        // this.height = height;
        // this.ctx = ctx;
        this.game = game;
        this.frame = frame;
        this.ctx = frame.getContext("2d");
        // this.background = document.getElementById("board");
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
        // this.hover();
        this.checkStatus();
        // this.select();
        // if (this.selectFrame === 2) this.selectFrame = 0;
        // if (this.selectFrame < 2) this.hover();

        // this.hover_check();
        // this.click();
    }

    checkStatus(){
        if (this.selectFrame === 2) {
            this.selectFrame = 0;
            // this.game.pause = true;
        }
        if (this.selectFrame < 2) {
            this.hover();
            // this.game.pause = false;
        }
        if (this.selectFrame === 0) {
            this.game.pause = false;
        }
        requestAnimationFrame(this.checkStatus.bind(this));
    }

    draw(){
        // const background = document.getElementById("board")
        // background.src = '../../assets/image/background.jpg';
        // background.onload = function(){
            // const width = 1000;
            // const height = 500;

        // this.frame.ctx.drawImage(this.background, 0, 0, this.frame.width, this.frame.height);

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

        // this.topLeft = [xPts[0], yPts[0], this.x, this.y];
        // this.topMid = [xPts[1], yPts[0], x, y];
        // this.topRight = [xPts[2], yPts[0], x, y];
        // this.botLeft = [xPts[0], yPts[1], x, y];
        // this.botMid = [xPts[1], yPts[1], x, y];
        // this.botRight = [xPts[2], yPts[1], x, y];

        
        for (let row = 0; row <= this.frame.width; row += this.x){
            for (let col = 0; col <= this.frame.height; col += this.y){
                this.ctx.strokeStyle = this.strokeStyle;
                this.ctx.strokeRect(row, col, this.x, this.y);
                // (row,col), (row+x,col), (row, col+y), (row+x, col+y)
                // (row,col,row+x,col+y)
                this.ctx.stroke();
            }
            // }
        }
    }

    hover(){
        this.frame.addEventListener("mousemove", e => {
            // refresh every frames
            if (this.selectFrame < 1){
                this.ctx.clearRect(0, 0, this.frame.width, this.frame.height);
                for (let row = 0; row <= this.frame.width; row += this.x){
                    for (let col = 0; col <= this.frame.height; col += this.y){
                        this.ctx.strokeStyle = this.strokeStyle;
                        this.ctx.strokeRect(row, col, this.x, this.y);
                        // (row,col), (row+x,col), (row, col+y), (row+x, col+y)
                        // (row,col,row+x,col+y)
                        this.ctx.stroke();
                    }
                    // }
                }
            }
    
            //top left frame
            if (
                (e.offsetX > this.topLeft[0] && e.offsetX < this.topLeft[1]) &&
                (e.offsetY > this.topLeft[2] && e.offsetY < this.topLeft[3]) &&
                (this.selectFrame < 1)
                // this.frame.ctx.isPointInPath(x, y)
            ){ 
                // console.log("hi");
                this.ctx.strokeStyle = "black";
                this.ctx.strokeRect(this.topLeft[0], this.topLeft[2], this.x, this.y);
                this.ctx.stroke();
            } 
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topLeft[0], this.topLeft[2], this.x, this.y);
            // this.ctx.stroke();
            // }
    
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
            // this.ctx.clearRect(0, 0, this.frame.width, this.frame.height);
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
            // }
    
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
            // this.ctx.clearRect(0, 0, this.frame.width, this.frame.height);
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
            // }
    
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
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
            
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
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
    
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

    select(){
        this.frame.addEventListener("click", e => {
            // refresh every frames
            // if (e.offsetX){
            //     this.ctx.clearRect(0, 0, this.frame.width, this.frame.height);
            //     for (let row = 0; row <= this.frame.width; row += this.x){
            //         for (let col = 0; col <= this.frame.height; col += this.y){
            //             this.ctx.strokeStyle = this.strokeStyle;
            //             this.ctx.strokeRect(row, col, this.x, this.y);
            //             // (row,col), (row+x,col), (row, col+y), (row+x, col+y)
            //             // (row,col,row+x,col+y)
            //             this.ctx.stroke();
            //         }
            //         // }
            //     }
            // }
    
            //top left frame
            if (
                (e.offsetX > this.topLeft[0] && e.offsetX < this.topLeft[1]) &&
                (e.offsetY > this.topLeft[2] && e.offsetY < this.topLeft[3])
                // this.frame.ctx.isPointInPath(x, y)
            ){ 
                // console.log(this.selectFrame);
                this.game.pause = true;
                this.selectFrame += 1;
                this.ctx.strokeStyle = "red";
                this.ctx.strokeRect(this.topLeft[0], this.topLeft[2], this.x, this.y);
                this.ctx.stroke();
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
                this.game.pause = true;
                this.selectFrame += 1;
                this.ctx.strokeStyle = "red";
                this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
                this.ctx.stroke();
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
                this.game.pause = true;
                this.selectFrame += 1;
                this.ctx.strokeStyle = "red";
                this.ctx.strokeRect(this.topRight[0], this.topRight[2], this.x, this.y);
                this.ctx.stroke();
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
                this.game.pause = true;
                this.selectFrame += 1;
                this.ctx.strokeStyle = "red";
                this.ctx.strokeRect(this.botLeft[0], this.botLeft[2], this.x, this.y);
                this.ctx.stroke();
            }
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
            
            //bot mid frame
            if (
                (e.offsetX > this.botMid[0] && e.offsetX < this.botMid[1]) &&
                (e.offsetY > this.botMid[2] && e.offsetY < this.botMid[3])
            ){ 
                this.game.pause = true;
                this.selectFrame += 1;
                this.ctx.strokeStyle = "red";
                this.ctx.strokeRect(this.botMid[0], this.botMid[2], this.x, this.y);
                this.ctx.stroke();
            }
            // this.ctx.strokeStyle = "lightgray";
            // this.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
            // this.ctx.stroke();
    
            //bot right frame
            if (
                (e.offsetX > this.botRight[0] && e.offsetX < this.botRight[1]) &&
                (e.offsetY > this.botRight[2] && e.offsetY < this.botRight[3])
            ){ 
                this.game.pause = true;
                this.selectFrame += 1;
                this.ctx.strokeStyle = "red";
                this.ctx.strokeRect(this.botRight[0], this.botRight[2], this.x, this.y);
                this.ctx.stroke();
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

    // hover_check(){
    //     this.game.canvas.addEventListener("mousemove", e => {
    //         // e.preventDefault();
    //         // e.stopPropagation();
    //         const x = this.game.width/3;
    //         const y = this.game.height/2;

    //         //checking if mouse is on:

    //         //top left frame
    //         if (
    //             (e.offsetX > this.topLeft[0] && e.offsetX < this.topLeft[1]) &&
    //             (e.offsetY > this.topLeft[2] && e.offsetY < this.topLeft[3])
    //         ){ 
    //             this.game.ctx.strokeStyle = "black";
    //             this.game.ctx.strokeRect(this.topLeft[0], this.topLeft[2], this.x, this.y);
    //             this.game.ctx.stroke();
    //         }

    //         //top mid frame
    //         if (
    //             (e.offsetX > this.topMid[0] && e.offsetX < this.topMid[1]) &&
    //             (e.offsetY > this.topMid[2] && e.offsetY < this.topMid[3])
    //         ){ 
    //             this.game.ctx.strokeStyle = "black";
    //             this.game.ctx.strokeRect(this.topMid[0], this.topMid[2], this.x, this.y);
    //             this.game.ctx.stroke();
    //         }

    //         //top right frame
    //         if (
    //             (e.offsetX > this.topRight[0] && e.offsetX < this.topRight[1]) &&
    //             (e.offsetY > this.topRight[2] && e.offsetY < this.topRight[3])
    //         ){ 
    //             this.game.ctx.strokeStyle = "black";
    //             this.game.ctx.strokeRect(this.topRight[0], this.topRight[2], this.x, this.y);
    //             this.game.ctx.stroke();
    //         }

    //         //bot left frame
    //         if (
    //             (e.offsetX > this.botLeft[0] && e.offsetX < this.botLeft[1]) &&
    //             (e.offsetY > this.botLeft[2] && e.offsetY < this.botLeft[3])
    //         ){ 
    //             this.game.ctx.strokeStyle = "black";
    //             this.game.ctx.strokeRect(this.botLeft[0], this.botLeft[2], this.x, this.y);
    //             this.game.ctx.stroke();
    //         }
            
    //         //bot mid frame
    //         if (
    //             (e.offsetX > this.botMid[0] && e.offsetX < this.botMid[1]) &&
    //             (e.offsetY > this.botMid[2] && e.offsetY < this.botMid[3])
    //         ){ 
    //             this.game.ctx.strokeStyle = "black";
    //             this.game.ctx.strokeRect(this.botMid[0], this.botMid[2], this.x, this.y);
    //             this.game.ctx.stroke();
    //         }

    //         //bot right frame
    //         if (
    //             (e.offsetX > this.botRight[0] && e.offsetX < this.botRight[1]) &&
    //             (e.offsetY > this.botRight[2] && e.offsetY < this.botRight[3])
    //         ){ 
    //             this.game.ctx.strokeStyle = "black";
    //             this.game.ctx.strokeRect(this.botRight[0], this.botRight[2], this.x, this.y);
    //             this.game.ctx.stroke();
    //         }
    //     })

        

    //     // this.game.canvas.addEventListener("mouseup", el => {
    //     //     console.log("mouseup");
    //     //     console.log(el);
    //     // })
    // }
    // click(){
    //     this.game.canvas.addEventListener("click", e => {
    //         e.preventDefault();
    //         e.stopPropagation();
    //         const x = this.game.width/3;
    //         const y = this.game.height/2;

    //         if (
    //             (e.offsetX > this.topLeft[0] && e.offsetX < this.topLeft[1]) &&
    //             (e.offsetY > this.topLeft[2] && e.offsetY < this.topLeft[3])
    //         ){ 
    //             this.game.ctx.strokeStyle = "black";
    //             this.game.ctx.strokeRect(this.topLeft[0], this.topLeft[2], this.x, this.y);
    //             this.game.ctx.stroke();
    //         }
    //     })
    // }
}