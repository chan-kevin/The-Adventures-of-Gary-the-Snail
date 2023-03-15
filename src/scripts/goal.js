export default class Goal{
    constructor(game){
        // this.ctx = ctx;
        // this.width = width;
        // this.height = height;
        this.game = game;

        this.fps = 30;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;

        this.sourceX = 150;
        this.sourceY = 160;
        this.sourceWidth = 400;
        this.sourceHeight = 360;
        this.x = 970;
        this.y = 440;
        this.bikiniY = 440;
        this.objectWidth = 150;
        this.objectHeight = 145;

        this.bubble = document.getElementById("goal");
        this.floatinggary = document.getElementById("floatinggary");
        this.bikini = document.getElementById("bikini");
        this.house = document.getElementById("home");
        this.draw();
    }

    // update(deltaTime){
    update(){

        // if (this.image_num < 2) this.image_num ++;
        // else this.image_num = 0;

        // if (this.frameTimer > this.frameInterval){
        //     this.frameTimer = 0;
            // console.log("hi")

            if (this.game.gary.goal){
                // console.log(this.y)
                this.y -= 6;
            }

        // } else {
        //     this.frameTimer += deltaTime;
        // }
    }

    draw(){
        this.game.ctx.strokeStyle = "lightgray";
        if (this.game.level < 4 ){
            if (!this.game.gary.goal){
                // this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
                this.game.ctx.drawImage(this.bubble, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
            } 
            if (this.game.gary.goal) {
                // this.game.ctx.strokeRect(this.x, this.y, this.objectWidth, this.objectHeight);
                this.game.ctx.drawImage(this.floatinggary, this.sourceX - 150, this.sourceY - 160, this.sourceWidth + 770, this.sourceHeight + 680, this.x, this.y, this.objectWidth, this.objectHeight);
            }
        }

        if (this.game.level === 4){
            // this.game.ctx.strokeRect(this.x, this.y-60, this.objectWidth-50, this.objectHeight+50);
            this.game.ctx.drawImage(this.house, this.sourceX - 140, this.sourceY - 160, this.sourceWidth - 200, this.sourceHeight, this.x, this.y-60, this.objectWidth-10, this.objectHeight+90);
        }
        // this.game.ctx.strokeStyle = "black"
        // this.game.ctx.strokeRect(this.x + this.objectWidth, this.y, this.objectWidth-60, this.objectHeight);
        this.game.ctx.drawImage(this.bikini, this.sourceX +40, this.sourceY-110, this.sourceWidth, this.sourceHeight + 60, this.x + this.objectWidth - 10, this.bikiniY, this.objectWidth-30, this.objectHeight);
        // this.ctx.drawImage(this.image, this.imageWidth, this.imageHeight, 180, 500, this.positionX[Math.floor(Math.random()*this.positionX.length)], 400, 300, 1000);
        // this.ctx.drawImage(this.image, 0, 0);
    }

    // checkCollision(){
    //     //check if gary hits rock
    //     if (
    //         (this.game.gary.x < (this.x + this.objectWidth)) &&
    //         ((this.game.gary.x + this.game.gary.objectWidth) > this.x) &&
    //         (this.game.gary.y < (this.y + this.objectHeight)) &&
    //         ((this.game.gary.y + this.game.gary.objectHeight) > this.y)
    //         ){
    //             this.directionRight = !this.directionRight;
    //             // while (this.game.rock.frame < this.game.rock.maxFrame){
    //             // this.game.ctx.drawImage(this.game.rock.image, this.game.rock.frame * this.game.rock.sourceX, this.game.rock.sourceY, this.game.rock.sourceWidth, this.game.rock.sourceHeight, this.game.rock.x, this.game.rock.y, this.game.rock.objectWidth, this.game.rock.objectHeight);
    //             // this.game.rock.frame ++;
    //             // console.log(this.game.rock.frame)
    //             // }
    //     }
    // }
}