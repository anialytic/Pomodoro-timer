let workTime = 24 * 60;
let breakTime = 5 * 60;

let time = workTime;
let mode = "work"; // work | break

let timerInterval = null;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

// Форматування часу
function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  timerDisplay.textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Старт
startBtn.addEventListener("click", () => {
  if (timerInterval !== null) return;

  timerInterval = setInterval(() => {
    time--;
    updateTimer();

    if (time <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;

      if (mode === "work") {
        mode = "break";
        time = breakTime;
        alert("Час на перерву ☕");
      } else {
        mode = "work";
        time = workTime;
        alert("Повертаємось до роботи 💪");
      }

      updateTimer();
    }
  }, 1000);
});

// Пауза
pauseBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

// Reset
resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  mode = "work";
  time = workTime;
  updateTimer();
});

// Перший рендер
updateTimer();
