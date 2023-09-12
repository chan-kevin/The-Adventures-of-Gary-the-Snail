import Game from "./scripts/game";
import Frame from "./scripts/frame";

export function startGame(){
    document.getElementById("song").pause();
    document.getElementById("instruction").style.display = "none";
    document.getElementById("game_background").style.display = "block";
    volume.removeEventListener("click", this.handleSongToggle);

    const canvas = document.getElementById("game");
    const background = document.getElementById("background");
    const frame = document.getElementById("frame");
    const ctx = background.getContext("2d");
    const pic = document.getElementById("board");
    ctx.drawImage(pic, 0, 0, background.width, background.height);
    const game = new Game(canvas, frame);

    game.over.overzap.style.display = "none";
    game.gary.zap.pause();
    game.gary.home.style.display = "none";

    game.destroy();

    document.body.removeEventListener('keydown', startGame);
}

document.addEventListener("DOMContentLoaded", () => {
    const song = document.getElementById("song");
    const volume = document.getElementById("homeSong");
    const volumeIcon = volume.querySelector("i");
    song.addEventListener("ended", handleSong);
    volume.addEventListener("click", handleSongToggle);
    song.play();

    function handleSong() {
        song.currentTime = 0;
        song.play();
    }

    function handleSongToggle(){
        if (song.paused) {
            volumeIcon.classList.remove("fa-volume-xmark");
            volumeIcon.classList.add("fa-volume-high")
            song.play();
        } else {
            volumeIcon.classList.remove("fa-volume-high");
            volumeIcon.classList.add("fa-volume-xmark")
            song.pause();
        }
    }
    song.play();

    document.body.addEventListener('keydown', startGame);
})