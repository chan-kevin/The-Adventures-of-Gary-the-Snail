import Frame from "./frame";

export default class Gary {
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.x = 10;
        this.image_width = 170;
        this.image_height = 115;
        this.image = document.getElementById("gary")
        this.drawIt();
    }

    drawIt(){  
        this.ctx.clearRect(0,0,this.width,this.height); 
        new Frame(this.ctx, this.width, this.height);
        // this.ctx.fillStyle = "red"; 
        // this.ctx.fillRect(this.x,450,200,100); 
        this.ctx.drawImage(this.image, this.image_width, this.image_height, 350, 400, this.x, 500, 80, 100);
        this.x+=5; 
        window.requestAnimationFrame(this.drawIt.bind(this));
    } 
}