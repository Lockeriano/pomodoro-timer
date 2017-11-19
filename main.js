var count = 1500;
var isStoped = false;
var isBreak = true;
var i = 0;
var startBtn = document.getElementById('start-btn');
var stopBtn = document.getElementById('stop-btn');

stopBtn.addEventListener('click', changeFlag);
startBtn.addEventListener('click', timerStart);


function timerStart(){
  var interval = setInterval(function timer() {
    if (isStoped) {
      return;
    } else {
      count = count - 1;
    }
    if (count === -1 && isBreak) {
      count = 300;
      isBreak = false;
      i++;
      console.log(i)
      if (i % 3 === 0) {
        count = 1200;
      }
      return;
    } else if (count === -1 && !isBreak) {
      count = 1500;
      isBreak = true;
    }
    isStoped = false;
    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    minutes %= 60;

    document.getElementById("timerContainer").innerHTML = minutes + ":" + seconds;
  }, 1000);
}

function changeFlag() {
  if (!isStoped){
    isStoped = true;
  } else {
    isStoped = false;
  }
}
