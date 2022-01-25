let treck = document.getElementById('treck');
let controlBtn = document.getElementById('play-pause');
let btnPrev = document.querySelector("#prev");   // Берём кнопку переключения предыдущего трека
let btnNext = document.querySelector("#next");   // Берём кнопку переключение следующего трека
let btnStop = document.querySelector("#stop");   // Берём кнопку переключение следующего трека
let time = document.querySelector('.time');


let treckNumber;
// let playlist = [
//     '1.mp3',
//     '2.mp3',
//     '3.mp3',
//     './audio/4.mp3',
// ];


// Play/Pause функция =============================
function playPause() {
  audioPlay = setInterval(function() {
    // Получаем значение на какой секунде песня
    let audioTime = Math.round(treck.currentTime);
    // Получаем всё время песни
    let audioLength = Math.round(treck.duration)
    // Назначаем ширину элементу time
    time.style.width = (audioTime * 100) / audioLength + '%';
}, 10)
   if (treck.paused) {
        treck.play();
        controlBtn.innerText = "Pause";
    } else { 
        treck.pause();
        controlBtn.innerText = "Play";
        //clearInterval(audioPlay)
    }

}
//============================================
controlBtn.addEventListener("click", playPause);
treck.addEventListener("ended", function() {
  controlBtn.innerText = "Play";
});

btnStop.addEventListener("click", function () {
    treck.pause()
    treck.currentTime = 0;
    controlBtn.innerText = "Play";
  
});
treck.addEventListener("ended", function() {
  controlBtn.innerText = "Play";
});

// btnNext.addEventListener("click", function() {
//     console.log("btnNext"); 
//     treckNumber = 0;
//         // Проверяем что переменная treck меньше трёх
//     if (treckNumber < playlist.length - 1) { // Если да, то
//         treckNumber = treckNumber++; // Увеличиваем её на один
//         //switchTreck(treckNumber); // Меняем песню 
        
//     } else { // Иначе
//         treckNumber = 0; // Присваиваем ей ноль
//         //switchTreck(treckNumber); // Меняем песню
        
//     }
//     console.log(treckNumber) 
// });

// btnPrev.addEventListener("click", function(treckNumber = 0) {
//     console.log("btnPrev");
//     treckNumber = 0;
//     // Проверяем что переменная treck больше нуля
//     if (treckNumber > 0) {
//         treckNumber = treckNumber--;// Если верно, то уменьшаем переменную на один
//         //switchTreck(treckNumber); // Меняем песню.
        
//     } else { // Иначе
//         treckNumber = playlist.length - 1; // Присваиваем 
//         //switchTreck(treckNumber); // Меняем песню
        
//     }
//     console.log(treckNumber)
// });



