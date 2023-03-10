export default class Frame {
    constructor(dimensions){
        this.dimensions = dimensions
        this.animate(ctx);
    }

    animate(ctx){
        this.drawFrames(ctx);
    }

    drawFrames(ctx){
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, 200, 200);
    }
}