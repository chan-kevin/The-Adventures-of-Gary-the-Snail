export default class Debug {
    constructor(game){
        this.game = game;
        this.keys = [];
        window.addEventListener("keydown", k => {
            // if (k.key === "d" && !this.keys.includes(k.key)){
                // if (k.key === "d") this.game.debug_status = !this.game.debug_status;
                // this.keys.push(k.key);

            // }
            // console.log(k.key, this.keys);
        })
        window.addEventListener("keyup", k => {
            if (k.key === "d"){
                this.keys.pop();
            }
            // console.log(k.key, this.keys);
        })
    }
}