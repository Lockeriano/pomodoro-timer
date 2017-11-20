var count = 1500,
    breakTime = 300,
    longBreakTime = 1200,
    isRunning = 0,
    isStoped = false,
    isBreak = true,
    isLongBreak = 0,
    isReset = false,
    startBtn = document.getElementById('start-btn'),
    stopBtn = document.getElementById('stop-btn'),
    resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startCounter);
stopBtn.addEventListener('click', stopCounter);
resetBtn.addEventListener('click', resetCounter);


function startCounter() {
  checkIfRunning();
  var interval = setInterval(function timer() {
    if (isStoped) {
      return;
    } else if (isReset) {
      clearInterval(interval);
      count = 1500;
      isLongBreak = 0;
      isBreak = false;
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
    isReset = false;
    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    minutes %= 60;

    document.getElementById("timerContainer").innerHTML = minutes + ":" + seconds;
  }, 1000);
}

function stopCounter() {
  if (!isStoped){
    isStoped = true;
  } else {
    isStoped = false;
  }
}

function resetCounter() {
  if (!isReset) {
    isReset = true;
  } else {
    isReset = false;
  }
}

function checkIfRunning() {
  isRunning++;
  if (isRunning > 1) {
    clearInterval(interval);
  } else {
    return
  }
}
