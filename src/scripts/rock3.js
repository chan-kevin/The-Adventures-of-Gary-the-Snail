export default class Rock3 {
    constructor(game){
        this.game = game;
        this.fps = 30
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.frame = 0;
        this.maxFrame = 0;

        this.sourceX = 0;
        this.sourceY = 120;
        this.sourceWidth = 642;
        this.sourceHeight = 500;
        this.x = 810;
        this.y = 80;
        this.boxX = 655;
        this.objectWidth = 180;
        this.objectHeight = 180;

        this.image = document.getElementById("rock");
    }

    update(){
        this.collision();
            if (this.frame < this.maxFrame) this.frame++;
            if (this.frame === this.maxFrame) {
                this.maxFrame = 0;
                this.frame = 0;
            }
    }

    draw(){
        this.game.ctx.drawImage(this.image, this.frame * (this.sourceX + this.sourceWidth), this.sourceY, this.sourceWidth, this.sourceHeight, this.x - 40, this.y, this.objectWidth, this.objectHeight);
    }

    collision(){
        if (
            ((this.game.gary.x + this.game.gary.objectWidth) > this.x) &&
            ((this.x + 35 + this.objectWidth) > this.game.gary.x) &&
            (this.y < (this.game.gary.y + this.game.gary.objectHeight)) &&
            ((this.y + this.objectHeight) > this.game.gary.y)
            ){
            this.maxFrame = 27;
            }
    }
}