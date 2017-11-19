var count = 1500;
var startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', timerStart);


function timerStart(){
  var interval = setInterval(function timer() {
    count = count - 1;
    if (count == -1) {
        clearInterval(interval);
        return;
    }
    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    minutes %= 60;

    document.getElementById("timerContainer").innerHTML = minutes + ":" + seconds;
  }, 1000);
}
