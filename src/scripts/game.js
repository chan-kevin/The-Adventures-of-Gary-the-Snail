// import Frame from "./frame";
import Gary from "./gary";
import Rock from "./rock";
import Rock2 from "./rock2";
import Goal from "./goal";
import Ground from "./ground";
import Jellyfish from "./jellyfish";
import Swap from "./swap";
import Frame from "./frame";
import Level from "./level";
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
        this.next = new Level(this);
        this.swap = new Swap(this);
        this.ground = new Ground(this);
        this.rock = new Rock(this);
        this.rock2 = new Rock2(this);
        // this.rocks = [];
        this.jellyfish = new Jellyfish(this);
        this.gary = new Gary(this);
        this.goal = new Goal(this);
        this.over = new Gameover(this);
        this.fps = 25;
        // this.event = new Event(this);
        this.lastTime = 0;
        this.pause = false;
        this.gameover = false;
        this.level = 1;
        // this.swap.click();
        // requestAnimationFrame(this.animate.bind(this, 0))
        // setInterval(this.resume.bind(this))  //slowed down the animate
        // this.resume();
        // while (!this.pause){
        // this.animate(0);
        // }
        // this.resume();
        // this.event.hover_check();
        this.animate();
        // this.draw();
        // this.debug = new Debug(this);
        // this.debug_status = true;
    }

    // addRock(){
    //     let posX = [620, 800, 400];
    //     let posY = [375, 375, 375];

    //     if (this.level === 1) {
    //         for (let i = 0; i < 2; i++){
    //             this.rocks.push(new Rock(this, posX[i], posY[i]));
    //         }
    //     }

    //     if (this.level === 2){
    //         for (let i = 0; i < 2; i++){
    //             this.rocks.push(new Rock(this, posX[i], posY[i]));
    //         }
    //     }
    // }

    // resume(){
    //     // if (this.level === 1 && this.rocks.length < 1) this.addRock();
    //     // if (this.level === 2 && this.rocks.length < 3) this.addRock();

    //     if (!this.pause){
    //         // this.animate(0);
    //         setTimeout(() => 
    //         requestAnimationFrame(this.animate.bind(this)), 1000/this.fps
    //         )
    //     } else {
    //         cancelAnimationFrame(this.animate.bind(this))
    //     }
    // }    

    // update(deltaTime){
    //     // let animateUpdate = ""
    //     // if (this.rock.collision()){
    //     //     animateUpdate = this.rock.update(deltaTime);
    //     // }
    //     // animateUpdate;
    //     this.rock.update(deltaTime);
    //     // this.rock2.update(deltaTime);
    //     // if (this.level === 2) this.rock2.update(deltaTime);
    //     // this.rocks.forEach((rock) => rock.update(deltaTime));
    //     this.jellyfish.update(deltaTime);
    //     this.gary.update(deltaTime);
    //     this.goal.update(deltaTime);
    // }

    update(){
        this.rock.update();
        if (this.level >= 3) this.rock2.update();
        if (this.level >= 2) this.jellyfish.update();
        this.gary.update();
        this.goal.update();
    }

    draw(){
        // this.frame.draw();
        this.ground.draw();
        // if (this.rock.collision()) this.rock.collision();
        // else this.rock.draw();
        this.rock.draw();
        if (this.level >= 3) this.rock2.draw();
        if (this.level >= 2) this.jellyfish.draw();
        this.gary.draw();
        this.goal.draw();
    }

    // animate(timeStamp){
    animate(){
        // console.log(timeStamp)
        // const deltaTime = timeStamp - this.lastTime;
        // console.log(deltaTime)
        // this.lastTime = timeStamp;
        // console.log(this.lastTime)
        this.ctx.clearRect(0,0,this.width,this.height);
        this.swap.checkStatus();

        // this.update(deltaTime);
        this.update();
        this.draw();



        setTimeout(() => {
        // setInterval(() => {
        // requestAnimationFrame(() => {
        // if (!this.pause){
        //     // setInterval(() => requestAnimationFrame(this.animate.bind(this), 0), 5000)
            requestAnimationFrame(this.animate.bind(this), 1000/this.fps);
        // } else {
        //     this.animate();
            // cancelAnimationFrame(this.animate.bind(this));
        })

        if (this.goal.y < 1){
            this.gary.goal = false;

            if (this.level === 1){
                this.goal.x = 640;
                this.goal.y = 440;

                this.rock.x = 420;
                this.rock.y = 375;
                
                this.gary.x = 1;
                this.gary.y = 485;
            }

            this.level += 1;
        }
            // this.next.nextLevel();

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
}