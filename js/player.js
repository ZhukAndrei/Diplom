let controlBtn = document.getElementById("play-pause"); // Берём кнопку Play/pause
let btnPrev = document.querySelector("#prev"); // Берём кнопку переключения предыдущего трека
let btnNext = document.querySelector("#next"); // Берём кнопку переключение следующего трека
let btnStop = document.querySelector("#stop"); // Берём кнопку стоп
let time = document.querySelector(".time"); 
let audioPlay;

// Отображение прогресса трека
 audioPlay = setInterval(function () {
    // Получаем значение на какой секунде песня
    let audioTime = Math.round(choiceAudio.currentTime);
    // Получаем всё время песни
    let audioLength = Math.round(choiceAudio.duration);
    // Назначаем ширину элементу time
    time.style.width = (audioTime * 100) / audioLength + "%";
  }, 10);
// Play/Pause функция =============================
function playPause() {
 
  if (choiceAudio.paused) {
    choiceAudio.play();
    controlBtn.innerText = "Pause";
  } else {
    choiceAudio.pause();
    controlBtn.innerText = "Play";
  }
  audioPlay()
}
