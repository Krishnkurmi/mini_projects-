const input = document.querySelector('.input-num');
const startBtn = document.querySelector('[data-action="start"]');
const countDisplay = document.querySelector('.count');
const clock = document.querySelector('.clock');
const alertBox = document.getElementById('alert');

let interval;
startBtn.addEventListener('click', () => {
  let minutes = parseInt(input.value);
  if (isNaN(minutes) || minutes <= 0) return;

  let totalSeconds = minutes * 60;
  let remaining = totalSeconds;

  clearInterval(interval);
  updateDisplay(remaining, totalSeconds);

  interval = setInterval(() => {
    remaining--;
    updateDisplay(remaining, totalSeconds);

    if (remaining <= 0) {
      clearInterval(interval);
      showAlert();
    }
  }, 1000);
});

function updateDisplay(seconds, total) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  countDisplay.textContent = mins > 0 ? mins : secs;

  const angle = ((total - seconds) / total) * 360;
  clock.style.background = `conic-gradient(#ec366b ${angle}deg, #feeff4 0deg)`;
}

function showAlert() {
  alertBox.classList.add('show');
}
