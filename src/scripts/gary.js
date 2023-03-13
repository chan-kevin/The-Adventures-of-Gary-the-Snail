// import Frame from "./frame";
// import rock from "./rock";
// import Goal from "./goal";
// import Ground from "./ground";

export default class Gary {
    constructor(game){
        this.game = game;
        // this.ctx = ctx;
        // this.width = width;
        // this.height = height;
        this.fps = 30;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        // this.frame = 0;
        // this.maxFrame = 2;

        this.sourceX = 80;
        this.sourceY = 115;
        this.sourceWidth = 380;
        this.sourceHeight = 210;
        this.x = 120;
        this.y = 485;
        this.objectWidth = 80;
        this.objectHeight = 50;

        this.image_num = 0;
        this.rightGary = [document.getElementById("gary"), document.getElementById("gary2"), document.getElementById("gary3")]
        this.leftGary = [document.getElementById("gary4"), document.getElementById("gary5"), document.getElementById("gary6")]
        // this.draw();
        this.direction = "right";
    }

    update(deltaTime){

        // if (this.image_num < 2) this.image_num ++;
        // else this.image_num = 0;

        if (this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
            // console.log("hi")
            // this.draw();
            // console.log(this.frameTimer)

            this.checkCollision();

            if (this.image_num < 2) this.image_num++;
            else this.image_num = 0;
            if (this.direction === "right") this.x+=6;
            else if (this.direction === "left") this.x-=6;

        } else {
            this.frameTimer += deltaTime;
        }
    }

    // update(){
    //     this.checkCollision();

    //     if (this.image_num < 2) this.image_num++;
    //     else this.image_num = 0;
    //     if (this.direction === "right") this.x+=3;
    //     else if (this.direction === "left") this.x-=3;
    // }

    draw(){  
        // this.game.ctx.clearRect(0,0,this.game.width,this.game.height); 
        // new Frame(this.game);
        // new Ground(this.game);
        // new rock(this.game);
        // new Goal(this.game);

       

        if (this.direction === "right") {
            this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
            this.game.ctx.drawImage(this.rightGary[this.image_num], this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
        }

        if (this.direction === "left") {
            this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
            this.game.ctx.drawImage(this.leftGary[this.image_num], this.sourceX-20, this.sourceY, this.sourceWidth, this.sourceHeight+10, this.x, this.y, this.objectWidth, this.objectHeight);
        }
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
        //     this.direction = "left";
        //     // while (this.game.rock.frame < this.game.rock.maxFrame){
        //     // this.game.ctx.drawImage(this.game.rock.image, this.game.rock.frame * this.game.rock.sourceX, this.game.rock.sourceY, this.game.rock.sourceWidth, this.game.rock.sourceHeight, this.game.rock.x, this.game.rock.y, this.game.rock.objectWidth, this.game.rock.objectHeight);
        //     // this.game.rock.frame ++;
        //     // console.log(this.game.rock.frame)
        //     // }
        // }
        // if (this.direction === "right"){
        //     this.x += 5;
        //     // console.log(this.x);
        //     if (this.x > this.game.width - this.sourceX) this.direction = "left";
        // }
        // if (this.direction === "left") {
        //     this.x -= 5;
        //     if (this.x <= 0) this.direction = "right";
        // }

        // if (this.x <= 0) this.x = 0;
        // if (this.x < this.width - this.imageWidth) this.x+=5;
        // if (this.x > this.width - this.imageWidth) this.x-=5;
    }
    checkCollision(){
        //check if gary hits rock
        if (this.game.rock.boxX < (this.x + this.objectWidth)) {
                this.direction = "left";
                // while (this.game.rock.frame < this.game.rock.maxFrame){
                // this.game.ctx.drawImage(this.game.rock.image, this.game.rock.frame * this.game.rock.sourceX, this.game.rock.sourceY, this.game.rock.sourceWidth, this.game.rock.sourceHeight, this.game.rock.x, this.game.rock.y, this.game.rock.objectWidth, this.game.rock.objectHeight);
                // this.game.rock.frame ++;
                // console.log(this.game.rock.frame)
                // }
        }

        //check if gary hits jellyfish
        if ((this.game.jellyfish.x + this.game.jellyfish.objectWidth) > this.x) {
            this.direction = "right";
        }

        if (this.x > this.game.width - this.sourceX) this.direction = "left";
        if (this.x <= 0) this.direction = "right";
            // if (this.direction === "right"){
            //     this.x += 5;
            //     // console.log(this.x);
            //     if (this.x > this.game.width - this.sourceX) this.direction = "left";
            // }
            // if (this.direction === "left") {
            //     this.x -= 5;
            //     if (this.x <= 0) this.direction = "right";
            // }
    } 
}