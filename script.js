let time = 25 * 60; // 25 хвилин у секундах
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
            alert("Time is up!");
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
    time = 25 * 60;
    updateTimer();
});

// Перший рендер
updateTimer();
