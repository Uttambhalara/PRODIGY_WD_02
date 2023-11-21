let timer;
let isRunning = false;
let time = 0;
let laps = [];

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStopBtn").textContent = "Start";
  } else {
    timer = setInterval(updateDisplay, 10);
    document.getElementById("startStopBtn").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function updateDisplay() {
  time += 10;
  const formattedTime = formatTime(time);
  document.getElementById("display").textContent = formattedTime;
}

function reset() {
  clearInterval(timer);
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStopBtn").textContent = "Start";
  isRunning = false;
  time = 0;
  laps = [];
  displayLaps();
}

function lap() {
  laps.push(time);
  displayLaps();
}

function displayLaps() {
  const lapsList = document.getElementById("laps");
  lapsList.innerHTML = "";
  laps.forEach((lapTime, index) => {
    const li = document.createElement("li");
    li.textContent = `Lap ${index + 1}: ${formatTime(lapTime)}`;
    lapsList.appendChild(li);
  });
}

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  return date.toISOString().substr(11, 8);
}
