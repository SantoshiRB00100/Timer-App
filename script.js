let seconds = 0;
let interval = null;

const timerDisplay = document.getElementById("timerDisplay");
const startSound = document.getElementById("startSound");
const stopSound = document.getElementById("stopSound");
const themeToggle = document.getElementById("themeToggle");

function displayTime() {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  timerDisplay.innerText =
    `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (interval) return;
  startSound.play();  // Play start sound
  interval = setInterval(() => {
    seconds++;
    displayTime();
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
  startSound.pause();  // Pause the start sound if it's playing
  startSound.currentTime = 0;  // Reset the sound to the beginning
}

function stopTimer() {
  stopSound.play();  // Play stop sound
  pauseTimer();  // Stop the timer and reset
  seconds = 0;
  displayTime();
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.innerText = document.body.classList.contains("dark-mode")
    ? "Toggle Theme ☀️"
    : "Toggle Theme 🌙";
});

displayTime();

  



  