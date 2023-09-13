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
import Rock3 from "./rock3";
import Jellyfish2 from "./jellyfish2";
import Jellyfish3 from "./jellyfish3";

export default class Game {
    constructor(canvas, frame){
        this.canvas = canvas;
        this.frame = new Frame(frame, this);
        this.ctx = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;

        this.next = new Level(this);
        this.swap = new Swap(this);
        this.ground = new Ground(this);
        this.rock = new Rock(this);
        this.rock2 = new Rock2(this);
        this.rock3 = new Rock3(this);
        this.jellyfish = new Jellyfish(this);
        this.jellyfish2 = new Jellyfish2(this);
        this.jellyfish3 = new Jellyfish3(this);
        this.gary = new Gary(this);
        this.goal = new Goal(this);
        this.over = new Gameover(this);
        this.fps = 73;
        this.lastTime = 0;
        this.pause = false;
        this.gameover = false;
        this.level = 1;

        if (this.level === 1) {
            this.click = document.getElementById("first-box");
            this.moveClick = this.moveClick.bind(this);
            this.click.style.display = "flex";
            this.click.style.left = "50%";
            document.addEventListener("click", this.moveClick);
        }

        this.animate();
    }

    moveClick() {
        this.click.style.left = "75%";
        document.removeEventListener("click", this.moveClick);
        this.removeClick = this.removeClick.bind(this);
        document.addEventListener("click", this.removeClick);
    }

    removeClick() {
        this.click.style.display = "none";
        document.removeEventListener("click", this.removeClick)
    }

    update(){
        this.rock.update();
        if (this.level >= 2) {
            this.rock2.update();
            this.rock3.update();
        }
        if (this.level >= 3) this.jellyfish.update();
        if (this.level >= 4) {
            this.jellyfish2.update();
            this.jellyfish3.update();
        }
        this.over.update();
        this.gary.update();
        this.goal.update();
    }

    draw(){
        this.ground.draw();
        this.rock.draw();
        if (this.level >= 2) {
            this.rock2.draw();
            this.rock3.draw();
        }
        if (this.level >= 3) this.jellyfish.draw();
        if (this.level >= 4) {
            this.jellyfish2.draw();
            this.jellyfish3.draw();
        }
        this.gary.draw();
        this.goal.draw();
    }

    destroy () {
        this.ctx.clearRect(0,0,this.width,this.height);
    }

    async animate() {
        this.ctx.clearRect(0,0,this.width,this.height);
        this.swap.checkStatus();
    
        this.update();
        this.draw();
    
        await this.nextLevel();

        if (!this.gameover){
            setTimeout(() => {
                requestAnimationFrame(this.animate.bind(this));
            }, 1000/this.fps);
        }
    }
    
    async nextLevel() {
        return new Promise(resolve => {
            if (this.goal.y < 1) {
                this.gary.goal = false;
                document.getElementById("game_background").style.display = "none";
                document.getElementById("loading").style.display = "block";
                if (this.gary.hit) this.gary.meow.play();
                setTimeout(() => {
                    document.getElementById("game_background").style.display = "block";
                    document.getElementById("loading").style.display = "none";
                    resolve();
                }, 5000);
    
                if (this.level === 1) {
                    this.goal.x = 990;
                    this.goal.y = 120;
                    this.goal.bikiniY = 115;
    
                    this.rock.x = 1020;
                    this.rock.y = 380;
    
                    this.gary.x = 1;
                    this.gary.y = 485;
                }
    
                if (this.level === 2) {
                    this.goal.x = 990;
                    this.goal.y = 120;
                    this.goal.bikiniY = 115;
    
                    this.rock.x = 1020;
                    this.rock.y = 380;
    
                    this.gary.x = 240;
                    this.gary.y = 485;
    
                    this.rock2.x = 20;
                    this.rock2.y = 380;
    
                    this.rock3.x = 820;
                    this.rock3.y = 80;
                }
    
                if (this.level === 3) {
                    this.goal.x = 820;
                    this.goal.y = 120;
                    this.goal.bikiniY = 115;
    
                    this.rock.x = 230;
                    this.rock.y = 380;
    
                    this.gary.x = 0;
                    this.gary.y = 485;
    
                    this.rock2.x = 230;
                    this.rock2.y = 80;
    
                    this.rock3.x = 650;
                    this.rock3.y = 80;
    
                    this.jellyfish.x = 20;
                    this.jellyfish.y = 140;
                }
    
                this.level += 1;
            } else {
                resolve();
            }
        });
    }
}