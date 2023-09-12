import Game from "./game";
import { startGame } from "..";

export default class Gameover {
    constructor(game){
        this.game = game;
        this.overzap = document.getElementById("gameover");
        this.gamebackground = document.getElementById("game_background");
    }

    update(){
        if (this.game.gameover){
            this.game.gary.zap.pause();
            this.overzap.style.display = "block";
            this.gamebackground.style.display = "none";
            this.game.gary.zap.loop = true;
            this.game.gary.zap.play();
            document.body.addEventListener("keydown", startGame);
        }
    }
}