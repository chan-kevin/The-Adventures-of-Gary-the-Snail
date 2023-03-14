// import Frame from "./frame";
import Gary from "./gary";
import Rock from "./rock";
import Goal from "./goal";
import Ground from "./ground";
import Jellyfish from "./jellyfish";
import Swap from "./swap";
import Frame from "./frame";
import Obstacles from "./rock";
import Gameover from "./gameover";

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
        this.rock = new Rock(this);
        this.goal = new Goal(this);
        this.jellyfish = new Jellyfish(this);
        this.swap = new Swap(this);
        this.gary = new Gary(this);
        this.over = new Gameover(this);
        // this.event = new Event(this);
        this.lastTime = 0;
        this.pause = false;
        this.gameover = false;
        // this.swap.click();
        // requestAnimationFrame(this.animate.bind(this, 0))
        setInterval(this.resume.bind(this), 0)  //slowed down the animate
        // while (!this.pause){
        // this.animate(0);
        // }
        // this.resume();
        // this.event.hover_check();
        // this.animate();
        // this.draw();
        // this.debug = new Debug(this);
        // this.debug_status = true;
    }

    resume(){
        if (!this.pause){
            // this.animate(0);
            requestAnimationFrame(this.animate.bind(this))
        } else {
            cancelAnimationFrame(this.animate.bind(this))
        }
    }    

    update(deltaTime){
        // let animateUpdate = ""
        // if (this.rock.collision()){
        //     animateUpdate = this.rock.update(deltaTime);
        // }
        // animateUpdate;
        this.rock.update(deltaTime);
        this.jellyfish.update(deltaTime);
        this.gary.update(deltaTime);
    }

    // update(){
    //     this.rock.update();
    //     this.jellyfish.update();
    //     this.gary.update();
    // }

    draw(){
        // this.frame.draw();
        this.ground.draw();
        // if (this.rock.collision()) this.rock.collision();
        // else this.rock.draw();
        this.rock.draw();
        this.jellyfish.draw();
        this.goal.draw();
        this.gary.draw();
    }

    animate(timeStamp){
    // animate(){
        // console.log(timeStamp)
        const deltaTime = timeStamp - this.lastTime;
        // console.log(deltaTime)
        this.lastTime = timeStamp;
        // console.log(this.lastTime)
        this.ctx.clearRect(0,0,this.width,this.height);
        // this.swap.click();
        // this.swap.checkStatus();
        this.update(deltaTime);
        // this.update();
        this.draw();
        // console.log(this.pause)
        // console.log(this.swap.box1)
        // console.log(this.gary.x)
        // setTimeout(() => {
        // setInterval(() => {
        // requestAnimationFrame(() => {
        if (!this.pause && !this.gameover){
            // setInterval(() => requestAnimationFrame(this.animate.bind(this), 0), 5000)
            requestAnimationFrame(this.animate.bind(this))
        }

        // if (this.gameover) {
        //     this.over.draw();
        // }

        // })
        // }, 0)
            // setInterval(() => {(this.animate.bind(this))}, 2000)
        // }
        // }, 20)
        // setInterval(this.resume.bind(this))
    }

    // draw (){
    //     new Frame(this.ctx, this.width, this.height);
    //     new Gary(this.ctx, this.width, this.height);
    //     new rock(this.ctx, this.width, this.height);
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