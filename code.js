var score = 0;
document.getElementById("clikButton").onclick = function () {
    score++
    document.getElementById("scoreText").innerText = score.toString();
}
document.getElementById("resetButton").onclick = function () {
    score = 0;
    document.getElementById("scoreText").innerText = score.toString();
}