import Game from "./game";

export default class Gameover {
    constructor(game){
        this.game = game;
        this.overzap = document.getElementById("gameover");
        this.gamebackground = document.getElementById("game_background");
        // this.nextgame = document.getElementById('gameover2');
    }

    update(){
        if (this.game.gameover){
            this.game.gary.zap.pause();
            this.overzap.style.display = "block";
            this.gamebackground.style.display = "none";
            this.game.gary.zap.loop = true;
            this.game.gary.zap.play();
            // setTimeout(() => {
            //     // this.overzap.style.display = "none";
            //     // this.nextgame.style.display = "block";
            //     this.restart.bind(this)
            // }, 4000)
        }
    }

    // restart(){
    //     this.overzap.style.display = "none";
    //     this.gamebackground.style.display = "block";
    //     // this.game.level = 1;
    //     new Game(this.game.canvas, this.game.frame);
    // }


}