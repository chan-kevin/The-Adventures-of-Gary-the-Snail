export default class Jellyfish {
    constructor(game){
        this.game = game;
        this.frame = 0;
        this.maxFrame = 1;

        this.sourceX = 0;
        this.sourceY = 0;
        this.sourceWidth = 40;
        this.sourceHeight = 30;
        this.x = 450;
        this.y = 450;
        this.objectWidth = 60;
        this.objectHeight = 60;

        this.image = document.getElementById("jellyfish");
    }

    update(){
            this.collision();
            if (this.frame < this.maxFrame) this.frame++;
            else this.frame = 0;
    }

    draw(){
        this.game.ctx.drawImage(this.image, this.frame * (this.sourceX + this.sourceWidth), this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.objectWidth, this.objectHeight);
    }

    collision(){
        if (
            (this.game.gary.x < (this.x + this.objectWidth)) &&
            ((this.game.gary.x + this.game.gary.objectWidth) > this.x) &&
            (this.game.gary.y < (this.y + this.objectHeight)) &&
            ((this.game.gary.y + this.game.gary.objectHeight) > this.y)
            ){
            this.maxFrame = 3;
        }
    }
}