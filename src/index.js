// import Example from "./scripts/example";
import Game from "./scripts/game";
import Frame from "./scripts/frame";

// // document.addEventListener("DOMContentLoaded", () => {
//     // console.log("Hello World!")
//     const canvas = document.getElementById("snail-game");
//     // new Example(game);  //new Game(snail-game)
//     new SnailGame(canvas);
// // });

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game");
    const background = document.getElementById("background");
    const frame = document.getElementById("frame");
    const ctx = background.getContext("2d");
    // ctx.fillStyle = "red";
    // ctx.fillRect(0, 0, background.width, background.height);
    // ctx.fill;
    const pic = document.getElementById("board");
    ctx.drawImage(pic, 0, 0, background.width, background.height);
    // setTimeout(() =>new Game(canvas, frame),1000)
    new Game(canvas, frame);
    // new Frame(frame);

    // var background = new Image();
    // background.src = '../assets/image/background.jpeg';
    // background.onload = function(){
    //     ctx.drawImage(background,0,0);  
    //     for (let row = 0; row <= canvas.width - x; row += x){
    //         for (let col = 0; col <= canvas.height - y; col += y){

    //             ctx.fillStyle = "red";
    //             ctx.strokeStyle = "black"
    //             ctx.strokeRect(row, col, x, y)
    //             // ctx.fillRect(row, col, x, y);
    //             console.log(x, y);
    //             console.log(row, col);
    //             ctx.stroke();
    //         }
    //     }
    // }

    // canvas.width = 800;
    // canvas.height = 500;
    // new SnailGame(ctx)
    // ctx.beginPath();
    // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    // ctx.fillStyle = "green";
    // ctx.fill();
    // ctx.rect(20, 20, 150, 100);
    // ctx.stroke();
    // ctx.fillStyle = "green";;
    // ctx.fillStyle = "red";
    // ctx.fillRect(0, 0, 300, 150);
    // ctx.clearRect(20, 20, 100, 50);
    // const canvasWidth = canvas.width;
    // const canvasHeight = canvas.height;
    // const rectWidth = 100;
    // const rectHeight = 100;

    // const horizontalSpacing = (canvasWidth - (rectWidth * 3)) / 4;
    // const verticalSpacing = (canvasHeight - (rectHeight * 2)) / 3;

    // for (let row = 0; row < 2; row++) {
    //     for (let col = 0; col < 3; col++) {
    //       const x = horizontalSpacing * (col + 1) + rectWidth * col;
    //       const y = verticalSpacing * (row + 1) + rectHeight * row;
    //       ctx.fillRect(x, y, rectWidth, rectHeight);
    //     }
    //   }

    // const x = canvas.width/3;
    // const y = canvas.height/2;

    // const color = ["red", "yellow", "green", "purple", "blue", "gray"]

    // for(let c = 0; c < color.length; c++){ 

    // var background = new Image();
    // background.src = '../assets/image/background.jpeg';
    // ctx.drawImage(background,0,0);   

        // for (let row = 0; row <= canvas.width - x; row += x){
        //     for (let col = 0; col <= canvas.height - y; col += y){

        //         ctx.fillStyle = "red";
        //         ctx.strokeStyle = "black"
        //         ctx.strokeRect(row, col, x, y)
        //         // ctx.fillRect(row, col, x, y);
        //         console.log(x, y);
        //         console.log(row, col);
        //         ctx.stroke();
        //     }
        // }
    // }

        // for (let r = 0; r < 3; r++) {
        //     for (let c = 0; c < 2; c++) {
        //             ctx.fillStyle("green");
        //             ctx.fillRect(c * x, r * y, x, y);
        //     }
        // }
})

