var count = 1500;
var isStoped = false;
var startBtn = document.getElementById('start-btn');
var stopBtn = document.getElementById('stop-btn');

stopBtn.addEventListener('click', changeFlag);
startBtn.addEventListener('click', timerStart);


function timerStart(e){
  var interval = setInterval(function timer() {
    if (isStoped) {
      return;
    } else (
      count = count - 1
    )
    if (count === -1) {
        clearInterval(interval);
        return;
    }
    isStoped = false;
    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    minutes %= 60;

    document.getElementById("timerContainer").innerHTML = minutes + ":" + seconds;
  }, 1000);
}

function changeFlag(){
  if (!isStoped){
    isStoped = true;
  } else {
    isStoped = false;
  }
}
