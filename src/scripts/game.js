// import Frame from "./frame";
import Gary from "./gary";
import Obstacles from "./obstacles";
import Goal from "./goal";
import Ground from "./ground";
import Jellyfish from "./jellyfish";
import Swap from "./swap";
import Frame from "./frame";

export default class Game {
    // constructor(ctx){
    //     this.ctx = ctx;
    //     this.draw(ctx);
    // }
    constructor(canvas, frame){
        this.canvas = canvas;
        this.frame = new Frame(frame, this);
        this.ctx = canvas.getContext("2d");
        // this.dimension = {width: canvas.width, height: canvas.height}
        this.width = canvas.width;
        this.height = canvas.height;
        // this.frame = new Frame(this);
        this.ground = new Ground(this);
        this.obstacles = new Obstacles(this);
        this.goal = new Goal(this);
        this.jellyfish = new Jellyfish(this);
        this.swap = new Swap(this);
        this.gary = new Gary(this);
        // this.event = new Event(this);
        this.lastTime = 0;
        this.pause = false;
        this.animate(0);
        // this.event.hover_check();
        // this.animate();
        // this.draw();
        // this.debug = new Debug(this);
        // this.debug_status = true;
    }

    update(deltaTime){
        // let animateUpdate = ""
        // if (this.obstacles.collision()){
        //     animateUpdate = this.obstacles.update(deltaTime);
        // }
        // animateUpdate;
        this.obstacles.update(deltaTime);
        this.jellyfish.update(deltaTime);
        this.gary.update(deltaTime);
    }

    // update(){
    //     this.obstacles.update();
    //     this.gary.update();
    // }

    draw(){
        // this.frame.draw();
        this.ground.draw();
        // if (this.obstacles.collision()) this.obstacles.collision();
        // else this.obstacles.draw();
        this.obstacles.draw();
        this.jellyfish.draw();
        this.goal.draw();
        this.gary.draw();
    }

    animate(timeStamp){
    // animate(){
        let deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        this.ctx.clearRect(0,0,this.width,this.height);
        this.update(deltaTime);
        // this.update();
        this.draw();
        this.swap.click();
        // console.log(this.gary.x)
        // setTimeout(() => {
        if (!this.pause){
        requestAnimationFrame(this.animate.bind(this))
        }
        // })
    }

    // draw (){
    //     new Frame(this.ctx, this.width, this.height);
    //     new Gary(this.ctx, this.width, this.height);
    //     new Obstacles(this.ctx, this.width, this.height);
    //     new Goal(this.ctx, this.width, this.height);
        // const background = new Image();
        // background.src = '../../assets/image/background.jpg';
        // // background.onload = function(){
        //     // const width = 1000;
        //     // const height = 500;
        // this.ctx.drawImage(background, 0, 0, this.dimension.width, this.dimension.height/2);
        // this.ctx.drawImage(background, 0, this.dimension.height/2, this.dimension.width, this.dimension.height/2);
        // const x = this.dimension.width/3;
        // const y = this.dimension.height/2;
        // for (let row = 0; row <= this.dimension.width - x; row += x){
        //     for (let col = 0; col <= this.dimension.height - y; col += y){
        //         this.ctx.strokeStyle = "lightgray";
        //         this.ctx.strokeRect(row, col, x, y);
        //         this.ctx.stroke();
        //     }
        //     // }
        // }
    // } 
}