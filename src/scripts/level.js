export default class Level{
    constructor(game){
        this.game = game;
    }

    nextLevel(){
        this.game.gary.goal = false;
        console.log(this.game.level)
        if (this.level === 1){
            this.game.gary.x = 120;

            // this.game.goal.x
            this.game.goal.y = 440;
        }
        console.log(this.game.level)
    }
}