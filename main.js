var count = 1500,
    breakTime = 300,
    longBreakTime = 1200,
    isStoped = false,
    isBreak = true,
    isLongBreak = 0,
    startBtn = document.getElementById('start-btn'),
    stopBtn = document.getElementById('stop-btn');

stopBtn.addEventListener('click', changeFlag);
startBtn.addEventListener('click', startCounting);


function startCounting() {
  var interval = setInterval(function timer() {
    if (isStoped) {
      return;
    } else {
      count = count - 1;
    }
    if (count == -1 && isBreak) {
      count = breakTime;
      isBreak = false;
      isLongBreak++;
      if (isLongBreak % 3 === 0) {
        count = longBreakTime;
      }
    } else if (count == -1 && !isBreak) {
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
