export default class Level{
    constructor(game){
        this.game = game;
    }

    nextLevel(){
        this.game.gary.goal = false;
        if (this.level === 1){
            this.game.gary.x = 120;

            this.game.goal.y = 440;
        }
    }
}