const timer = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let startTime, elapsedTime = 0, interval;

// Event Listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Start Timer
function startTimer() {
  startTime = Date.now() - elapsedTime;
  interval = setInterval(updateTimer, 10);
  startBtn.disabled = true;
}

// Stop Timer
function stopTimer() {
  clearInterval(interval);
  startBtn.disabled = false;
}

// Reset Timer
function resetTimer() {
  clearInterval(interval);
  elapsedTime = 0;
  timer.innerText = '00:00:00';
  startBtn.disabled = false;
}

// Update Timer
function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  timer.innerText = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
}

// Format Time
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}