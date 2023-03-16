export default class Gameover {
    constructor(game){
        this.game = game;
        this.overzap = document.getElementById("gameover");
        this.gamebackground = document.getElementById("game_background");
        this.nextgame = document.getElementById('gameover2');
    }

    update(){
        if (this.game.gameover){
            this.game.gary.zap.pause();
            this.overzap.style.display = "block";
            this.gamebackground.style.display = "none";
            this.game.gary.zap.play();
            setTimeout(() => {
                this.overzap.style.display = "none";
                this.nextgame.style.display = "block";
            }, 4000)
        }
    }


}