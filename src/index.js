// Get references to HTML elements
const timerDisplay = document.getElementById("watch");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Initialize variables
let elapsedTimeInSeconds = 0;
let initialTimerDisplay = formatTime(elapsedTimeInSeconds);
timerDisplay.textContent = initialTimerDisplay;

// Format elapsed time in seconds to HH:MM:SS format
function formatTime(elapsedTimeInSeconds) {
  // nested function to pad single-digit numbers with a leading 0
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  const hours = Math.floor(elapsedTimeInSeconds / 3600);
  const minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
  const seconds = elapsedTimeInSeconds % 60;

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

// Start the timer and disable the start button
function startTimer() {
  let timerInterval = setInterval(() => {
    elapsedTimeInSeconds++;
    let display = formatTime(elapsedTimeInSeconds);
    timerDisplay.textContent = display;
    startButton.disabled = true;
  }, 1000);

  // Stop the timer and re-enable the start button
  stopButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    startButton.disabled = false;
  });

  // Reset the timer, re-enable the start button, and clear the interval
  resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    elapsedTimeInSeconds = 0;
    timerDisplay.textContent = initialTimerDisplay;
    startButton.disabled = false;
  });
}

// Add event listener to start button
startButton.addEventListener("click", startTimer);
