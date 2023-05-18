// import Frame from "./frame";
// import rock from "./rock";
// import Goal from "./goal";
// import Ground from "./ground";
import { startGame } from "..";

export default class Gary {
    constructor(game){
        this.game = game;
        // this.ctx = ctx;
        // this.width = width;
        // this.height = height;
        // this.fps = 30;
        // this.frameInterval = 1000/this.fps;
        // this.frameTimer = 0;
        // this.frame = 0;
        // this.maxFrame = 2;

        this.sourceX = 80;
        this.sourceY = 115;
        this.sourceWidth = 380;
        this.sourceHeight = 210;
        this.x = 1;
        this.y = 485;
        this.objectWidth = 80;
        this.objectHeight = 50;

        this.image_num = 0;
        this.rightGary = [document.getElementById("gary"), document.getElementById("gary2"), document.getElementById("gary3")];
        this.leftGary = [document.getElementById("gary4"), document.getElementById("gary5"), document.getElementById("gary6")];
        this.shockedLeftGary = document.getElementById("shockedleftgary");
        this.shockedRightGary = document.getElementById("shockedrightgary");
        this.floatinggary = document.getElementById("floatinggary");
        // this.draw();
        this.directionRight = true;
        // this.directionRight = false;

        // this.mouse = document.getElementById("mouse");
        // this.mouseX = 600;
        // this.mouseY = 440;
        // this.mouseEnd = false;
        // this.clicked = document.getElementById("clicked");
        // this.clickedX = 540;
        // this.clickedY = 380;

        this.shocked = false;
        this.shockedLeftWidth = 687;
        this.shockedRightWidth = 897;
        this.shockedHeight = 510;
        this.shockedFrame = 0;
        this.shockedMaxFrame = 6;

        this.zap = document.getElementById("zap");
        this.meow = document.getElementById("meow");
        this.home = document.getElementById("arrivedHome");
        this.spongebob = document.getElementById("spongebob")

        this.song = document.getElementById("theme");
        this.song.addEventListener("ended", this.handleSong.bind(this));
        this.song.play();
        this.song.volume = 0.5;
        this.volume = document.getElementById("volume");
        this.volumeIcon = this.volume.querySelector("i");
        this.volume.addEventListener("click", this.handleSongToggle.bind(this));
        this.hit = false;

        this.goal = false;
    }

    // update(deltaTime){

    //     if (this.frameTimer > this.frameInterval){
    //         this.frameTimer = 0;

    //         this.checkCollision();

    //         if (this.image_num < 2) this.image_num++;
    //         else this.image_num = 0;

    //         if (!this.shocked && !this.goal){
    //             if (this.directionRight) this.x+=6;
    //             else if (!this.directionRight) this.x-=6;
    //         }

    //         if (this.shocked){
    //             if (this.shockedFrame < this.shockedMaxFrame) this.shockedFrame ++;
    //             else this.shockedFrame = 0;
    //         }

    //     } else {
    //         this.frameTimer += deltaTime;
    //     }
    // }

    // update(deltaTime){
    //     this.checkCollision();

    //     if (this.frameTimer > this.frameInterval) {
    //         this.frameTimer = 0;
    //         if (this.x < this.maxFrame) this.x++;
    //         else this.frameX = 0;
    //     } else {
    //         this.frameTimer += deltaTime;
    //     }

    //     if (this.image_num < 2) this.image_num++;
    //     else this.image_num = 0;
    //     if (!this.shocked && !this.goal){
    //         if (this.directionRight) this.x+=4;
    //         else if (!this.directionRight) this.x-=4;
    //     }
    //     if (this.shocked){
    //         if (this.shockedFrame < this.shockedMaxFrame) this.shockedFrame ++;
    //         else this.shockedFrame = 0;
    //     }
    // }

    handleSong() {
        this.song.currentTime = 0;
        this.song.play();
    }

    handleSongToggle(){
        if (this.song.paused) {
            this.volumeIcon.classList.remove("fa-volume-xmark");
            this.volumeIcon.classList.add("fa-volume-high");
            this.hit = true;
            this.song.play();
        } else {
            this.volumeIcon.classList.remove("fa-volume-high");
            this.volumeIcon.classList.add("fa-volume-xmark");
            this.hit = false;
            this.song.pause();
        }
    }

    update(){
        this.checkCollision();

        // if (this.game.level === 1 && !this.mouseEnd) {
        //     this.mouseX -= 1;
        //     this.mouseY -= 1;
        // }

        // if (this.mouseY === 380) {
        //     // console.log(this.mouseX) //540
        //     this.mouseEnd = true
        //     this.mouse.style.display = "none";
        //     this.game.ctx.drawImage(this.clicked, 0, 0, 224, 209, this.clickedX, this.clickedY, 40, 40)
        //     setInterval( function restartMouse (){
        //         this.mouseEnd = false;
        //         this.mouseY = 440;
        //         this.mouseX = 600;
        //     }, 1000)
        // }

        if (this.image_num < 2) this.image_num++;
        else this.image_num = 0;
        if (!this.shocked && !this.goal){
            if (this.directionRight) this.x+=4;
            else if (!this.directionRight) this.x-=4;
        }
        if (this.shocked){
            if (this.shockedFrame < this.shockedMaxFrame) this.shockedFrame ++;
            else this.shockedFrame = 0;
        }
    }

    draw(){  
        // this.game.ctx.clearRect(0,0,this.game.width,this.game.height); 
        // new Frame(this.game);
        // new Ground(this.game);
        // new rock(this.game);
        // new Goal(this.game);
        this.showLevel();

        // if (this.game.level === 1 && !this.mouseEnd) {
        //     this.game.ctx.drawImage(this.mouse, 0, 0, 154, 156, this.mouseX, this.mouseY, 30, 30)
        // }
       
        if (!this.shocked && !this.goal){
            if (this.directionRight) {
                // this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
                this.game.ctx.drawImage(this.rightGary[this.image_num], this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
            }

            if (!this.directionRight) {
                // this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
                this.game.ctx.drawImage(this.leftGary[this.image_num], this.sourceX-20, this.sourceY, this.sourceWidth, this.sourceHeight+10, this.x, this.y, this.objectWidth, this.objectHeight);
            }
        }

        if (this.shocked && !this.directionRight){
            // this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
            this.game.ctx.drawImage(this.shockedLeftGary, this.shockedFrame * (this.sourceX-80 + this.shockedLeftWidth), this.sourceY-50, this.shockedLeftWidth, this.shockedHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        }

        if (this.shocked && this.directionRight){
            // this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
            this.game.ctx.drawImage(this.shockedRightGary, this.shockedFrame * (this.sourceX-80 + this.shockedRightWidth), this.sourceY-50, this.shockedRightWidth, this.shockedHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        }

        // if (this.goal) {
        //     this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
        //     this.game.ctx.drawImage(this.floatinggary, this.sourceX, this.sourceY-50, this.shockedRightWidth, this.shockedHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        // }

        // if (this.frameX < 3) this.frameX ++;
        // else this.frameX = 1;
        // if (this.gameFrame % this.staggerFrames == 0){

        // setTimeout(() => {
        //     if (this.image_num < 2) this.image_num ++;
        //     else this.image_num = 0;
        //     // this.x+=5;
        //     window.requestAnimationFrame(this.draw.bind(this));}, "60"
        // )  

        // this.x+=5;

        // if (this.game.rock.x < (this.x + this.objectWidth)) {
        //     this.directionRight = "left";
        //     // while (this.game.rock.frame < this.game.rock.maxFrame){
        //     // this.game.ctx.drawImage(this.game.rock.image, this.game.rock.frame * this.game.rock.sourceX, this.game.rock.sourceY, this.game.rock.sourceWidth, this.game.rock.sourceHeight, this.game.rock.x, this.game.rock.y, this.game.rock.objectWidth, this.game.rock.objectHeight);
        //     // this.game.rock.frame ++;
        //     // console.log(this.game.rock.frame)
        //     // }
        // }
        // if (this.directionRight === "right"){
        //     this.x += 5;
        //     // console.log(this.x);
        //     if (this.x > this.game.width - this.sourceX) this.directionRight = "left";
        // }
        // if (this.directionRight === "left") {
        //     this.x -= 5;
        //     if (this.x <= 0) this.directionRight = "right";
        // }

        // if (this.x <= 0) this.x = 0;
        // if (this.x < this.width - this.imageWidth) this.x+=5;
        // if (this.x > this.width - this.imageWidth) this.x-=5;
    }
    checkCollision(){
        //check if gary hits rock
        // this.game.rocks.forEach( (rock) => {
        this.rockCollision(this.game.rock);

        if (this.game.level >= 2){
            this.rockCollision(this.game.rock2);
            this.rockCollision(this.game.rock3);
        }   
        // })

        //check if gary hits jellyfish
        if (this.game.level >= 3){
            this.jellyfishCollision(this.game.jellyfish);
        }
        
        if (this.game.level >= 4){
            this.jellyfishCollision(this.game.jellyfish2);
            this.jellyfishCollision(this.game.jellyfish3);
        }

        if (
            (this.game.goal.x < (this.x + this.objectWidth)) &&
            ((this.game.goal.x + this.game.goal.objectWidth) > this.x) &&
            (this.game.goal.y < (this.y + this.objectHeight)) &&
            ((this.game.goal.y + this.game.goal.objectHeight) > this.y)
            ){
            // this.game.gary = [];
            // this.directionRight = !this.directionRight;
            this.goal = true;

            if (this.game.level === 4){
                // document.body.addEventListener("keydown", startGame);
                this.song.pause();
                this.game.over.gamebackground.style.display = "none";
                this.home.style.display = "block";
                this.spongebob.play();
            }
            // this.game.gameover = true;
        }

        if (this.x > this.game.width - this.sourceX) this.directionRight = !this.directionRight;
        if (this.x <= 0) this.directionRight = !this.directionRight;
    } 

    rockCollision(rock){
        if (
            (rock.x  < (this.x + this.objectWidth)) &&
            ((rock.x  + rock.objectWidth) > this.x) &&
            (rock.y < (this.y + this.objectHeight)) &&
            ((rock.y + rock.objectHeight) > this.y)
            ){
                this.directionRight = !this.directionRight;
                if ( this.hit ) this.meow.play();
        }
    }

    jellyfishCollision(jellyfish){
        if (
            (jellyfish.x < (this.x + this.objectWidth)) &&
            ((jellyfish.x + jellyfish.objectWidth) > this.x) &&
            (jellyfish.y < (this.y + this.objectHeight)) &&
            ((jellyfish.y + jellyfish.objectHeight) > this.y)
        ){
            this.shocked = true;
            this.zap.play();
            this.song.pause();
            this.song.currentTime = 0;
            setTimeout(() => this.game.gameover = true, 4000);
        }
    }

    showLevel(){
        this.game.ctx.font = '30px "Castellar"';
        this.game.ctx.fillStyle = "rgb(73, 100, 133)";
        this.game.ctx.textAlign = "center";
        this.game.ctx.fillText(`Level ${this.game.level}`, this.game.canvas.width/2, 40);
    }
}