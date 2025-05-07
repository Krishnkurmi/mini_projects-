const startBtn = document.getElementById("startBtn");
const testArea = document.getElementById("testArea");
const inputArea = document.getElementById("inputArea");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");
const cpmDisplay = document.getElementById("cpm");
const accuracyDisplay = document.getElementById("accuracy");
const progressBar = document.getElementById("progressBar");
const testText = "wind mind father fly standard minute story explain join above enough.";
let timer = 60;
let interval = null;
let isTyping = false;
startBtn.onclick = () => {
  inputArea.value = "";
  inputArea.disabled = false;
  inputArea.focus();
  testArea.innerText = testText;
  timer = 60;
  timeDisplay.innerText = timer;
  isTyping = false;
  clearInterval(interval);
  wpmDisplay.innerText = "0";
  cpmDisplay.innerText = "0";
  accuracyDisplay.innerText = "0";
  progressBar.style.width = "0%";
  startBtn.innerText = "Restart Typing";
};

inputArea.oninput = () => {
  if (!isTyping) {
    isTyping = true;
    interval = setInterval(updateTimer, 1000);
  }

  const inputText = inputArea.value;
  const correctText = testText.substring(0, inputText.length);

  let correctChars = 0;
  for (let i = 0; i < inputText.length; i++) {
    if (inputText[i] === testText[i]) {
      correctChars++;
    }
  }

  const accuracy = (correctChars / inputText.length) * 100 || 0;
  const wordsTyped = inputText.trim().split(" ").length;
  const cpm = inputText.length;

  accuracyDisplay.innerText = accuracy.toFixed(0);
  wpmDisplay.innerText = Math.floor(wordsTyped / (60 - timer + 1) * 60);
  cpmDisplay.innerText = Math.floor(cpm / (60 - timer + 1) * 60);

  // Update progress bar
  const progress = (inputText.length / testText.length) * 100;
  progressBar.style.width = `${progress}%`;

  // Stop timer if sentence is fully typed
  if (inputText === testText) {
    clearInterval(interval);
    inputArea.disabled = true;
    startBtn.innerText = "Completed!";
  }
};

function updateTimer() {
  timer--;
  timeDisplay.innerText = timer;

  if (timer === 0) {
    clearInterval(interval);
    inputArea.disabled = true;
    startBtn.innerText = "Time's Up!";
  }
}