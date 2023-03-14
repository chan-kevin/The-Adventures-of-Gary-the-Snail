export default class Gameover {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = "Helvetica";
    }

    draw(){
        if (this.game.gameover){
            this.game.ctx.font = this.fontSize + "px" + this.fontFamily;
            this.game.ctx.textAlign = "center";
            this.game.ctx.fillStyle = "black";
            this.game.ctx.fillText('Testing', this.game.width * 0.5, this.game.height * 0.5);
        }
    }


}