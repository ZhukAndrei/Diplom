let treck = document.getElementById("treck");
let controlBtn = document.getElementById("play-pause");
let btnPrev = document.querySelector("#prev"); // Берём кнопку переключения предыдущего трека
let btnNext = document.querySelector("#next"); // Берём кнопку переключение следующего трека
let btnStop = document.querySelector("#stop"); // Берём кнопку переключение следующего трека
let time = document.querySelector(".time");
let audioPlay;
let treckNumber;
// let playlist = [
//     '1.mp3',
//     '2.mp3',
//     '3.mp3',
//     './audio/4.mp3',
// ];

// Play/Pause функция =============================
function playPause() {
  audioPlay = setInterval(function () {
    // Получаем значение на какой секунде песня
    let audioTime = Math.round(treck.currentTime);
    // Получаем всё время песни
    let audioLength = Math.round(treck.duration);
    // Назначаем ширину элементу time
    time.style.width = (audioTime * 100) / audioLength + "%";
  }, 10);
  if (choiceAudio.paused) {
    choiceAudio.play();
    controlBtn.innerText = "Pause";
  } else {
    choiceAudio.pause();
    controlBtn.innerText = "Play";
  }
}
//============================================
// controlBtn.addEventListener("click", playPause);
// treck.addEventListener("ended", function () {
//   controlBtn.innerText = "Play";
// });

// btnStop.addEventListener("click", function () {
//   treck.pause();
//   treck.currentTime = 0;
//   controlBtn.innerText = "Play";
// });
// treck.addEventListener("ended", function () {
//   controlBtn.innerText = "Play";
// });
