var count = 1500,
    breakTime = 300,
    longBreakTime = 1200,
    isRunning = 0,
    isStopped = false,
    isBreak = true,
    isLongBreak = 0,
    isReset = false,
    alarm = new Audio('alarm.mp3'),
    startBtn = document.getElementById('start-btn'),
    stopBtn = document.getElementById('stop-btn'),
    infoBtn = document.getElementById('info-btn'),
    resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startCounter);
stopBtn.addEventListener('click', stopCounter);
resetBtn.addEventListener('click', resetCounter);


function startCounter() {
  stopCounterIfRunning();
  var interval = setInterval(function () {
    if (isStopped) {
      isRunning = 0;
      clearInterval(interval);
    } else {
      count = count - 1;
    }
    if (count === -1 && isBreak) {
      count = breakTime;
      isBreak = false;
      isLongBreak++;
      if (isLongBreak % 3 === 0) {
        count = longBreakTime;
      }
    } else if (count === -1 && !isBreak) {
      count = 1500;
      isBreak = true;
    } else if (count === 5) {
      alarm.play();
    }
    isStopped = false;
    var seconds = ('0' + count % 60).slice(-2);
    var minutes = Math.floor(count / 60);
    minutes %= 60;
    minutes = ('0' + minutes).slice(-2);

    document.getElementById("timerContainer").innerHTML = minutes + ":" + seconds;
  }, 1000);
}

function stopCounter() {
  isStopped = (!isStopped);
}

function resetCounter() {
  if (!isReset) {
    location.reload();
  }
}

function stopCounterIfRunning() {
  isRunning++;
  if (isRunning > 1) {
    clearInterval(interval);
  }
}
