export default class Goal{
    constructor(game){
        this.game = game;

        this.fps = 30;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;

        this.sourceX = 150;
        this.sourceY = 160;
        this.sourceWidth = 400;
        this.sourceHeight = 360;
        this.x = 970;
        this.y = 420;
        this.bikiniY = 415;
        this.objectWidth = 150;
        this.objectHeight = 145;

        this.bubble = document.getElementById("goal");
        this.floatinggary = document.getElementById("floatinggary");
        this.bikini = document.getElementById("bikini");
        this.house = document.getElementById("home");
        this.draw();
    }

    update(){
        if (this.game.level < 4){
            if (this.game.gary.goal){
                this.y -= 6;
            }
        }
    }

    draw(){
        this.game.ctx.strokeStyle = "lightgray";
        if (this.game.level < 4 ){
            if (!this.game.gary.goal){
                this.game.ctx.drawImage(this.bubble, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
            } 
            if (this.game.gary.goal) {
                this.game.ctx.drawImage(this.floatinggary, this.sourceX - 150, this.sourceY - 160, this.sourceWidth + 770, this.sourceHeight + 680, this.x, this.y, this.objectWidth, this.objectHeight);
            }
        }

        if (this.game.level === 4){
            this.game.ctx.drawImage(this.house, this.sourceX - 140, this.sourceY - 160, this.sourceWidth - 200, this.sourceHeight, this.x, this.y-60, this.objectWidth-10, this.objectHeight+90);
        }
        this.game.ctx.drawImage(this.bikini, this.sourceX +40, this.sourceY-110, this.sourceWidth, this.sourceHeight + 60, this.x + this.objectWidth - 10, this.bikiniY, this.objectWidth-30, this.objectHeight);
    }
}