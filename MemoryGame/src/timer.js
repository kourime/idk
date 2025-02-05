var startTime;
var timerInterval;
var isRunning = false;
var time = 0;

function formatTime(seconds) {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var secs = seconds % 60;
  return pad(hours) + ":" + pad(minutes) + ":" + pad(secs);
}

function pad(num) {
  return (num < 10) ? "0" + num : num;
}

function startTimer() {
  if (isRunning) {
    console.log('Секундомер уже запущен.');
    return;
  }
  isRunning = true;
  startTime = Date.now() - time * 1000;
  timerInterval = setInterval(function() {
    time = Math.floor((Date.now() - startTime) / 1000);
    console.log(formatTime(time));
  }, 1000);
  console.log('Секундомер запущен.');
}

function stopTimer() {
  if (!isRunning) {
    console.log('Секундомер не был запущен.');
    return;
  }
  clearInterval(timerInterval);
  isRunning = false;
  console.log('Секундомер остановлен.');
}

function resetTimer() {
  stopTimer();
  time = 0;
  console.log('Секундомер сброшен.');
  console.log('00:00:00');
}

setTimeout(startTimer, 1000);
setTimeout(stopTimer, 5000);
setTimeout(startTimer, 7000);
setTimeout(resetTimer, 10000);