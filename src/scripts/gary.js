import Frame from "./frame";

export default class Gary {
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.x = 5;
        this.drawIt();
    }

    drawIt(){  
        this.ctx.clearRect(0,0,this.width,this.height); 
        new Frame(this.ctx, this.width, this.height);
        this.ctx.fillStyle = "red"; 
        this.ctx.fillRect(this.x,450,200,100); 
        this.x+=5; 
        window.requestAnimationFrame(this.drawIt.bind(this));
    } 
}