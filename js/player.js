let treck = document.getElementById('treck');
let controlBtn = document.getElementById('play-pause');
let btnPrev = document.querySelector("#prev");   // Берём кнопку переключения предыдущего трека
let btnNext = document.querySelector("#next");   // Берём кнопку переключение следующего трека
let treckNumber;
// let playlist = [
//     '1.mp3',
//     '2.mp3',
//     '3.mp3',
//     './audio/4.mp3',
// ];


// console.log(playlist);
// Play/Pause функция
function playPause() {
  audioPlay = setInterval(function() {
    // Получаем значение на какой секунде песня
    let audioTime = Math.round(audio.currentTime);
    // Получаем всё время песни
    let audioLength = Math.round(audio.duration)
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

controlBtn.addEventListener("click", playPause);
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







// let audio = document.getElementById("audio");    // Берём элемент audio
// let time = document.querySelector(".time");      // Берём аудио дорожку
// let btnPlay = document.querySelector(".play");   // Берём кнопку проигрывания
// let btnPause = document.querySelector(".pause"); // Берём кнопку паузы
// let btnPrev = document.querySelector(".prev");   // Берём кнопку переключения предыдущего трека
// let btnNext = document.querySelector(".next");   // Берём кнопку переключение следующего трека

// // Массив с названиями песен
// let playlist = [
//     '1.mp3',
//     '2.mp3',
//     '3.mp3',
//     '4.mp3',
// ];
 
// let treck; // Переменная с индексом трека
 
// // Событие перед загрузкой страницы
// window.onload = function() {
//     treck = 0; // Присваиваем переменной ноль
// }

// function switchTreck (numTreck) {
//     // Меняем значение атрибута src
//     audio.src = './audio/' + playlist[numTreck];
//     // Назначаем время песни ноль
//     audio.currentTime = 0;
//     // Включаем песню
//     audio.play();
// }

// btnPlay.addEventListener("click", function() {
//     audio.play(); // Запуск песни
//     // Запуск интервала 
//     audioPlay = setInterval(function() {
//         // Получаем значение на какой секунде песня
//         let audioTime = Math.round(audio.currentTime);
//         // Получаем всё время песни
//         let audioLength = Math.round(audio.duration)
//         // Назначаем ширину элементу time
//         time.style.width = (audioTime * 100) / audioLength + '%';
//         // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
//         // И проверяем что переменная treck меньше четырёх
//         if (audioTime == audioLength && treck < 3) {
//             treck++; // То Увеличиваем переменную 
//             switchTreck(treck); // Меняем трек
//         // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
//         } else if (audioTime == audioLength && treck >= 3) {
//             treck = 0; // То присваиваем treck ноль
//             switchTreck(treck); //Меняем трек
//         }
//     }, 10)
// });

// btnPause.addEventListener("click", function() {
//     audio.pause(); // Останавливает песню
//     clearInterval(audioPlay) // Останавливает интервал
// });

// btnPrev.addEventListener("click", function() {
//     // Проверяем что переменная treck больше нуля
//     if (treck > 0) {
//         treck--; // Если верно, то уменьшаем переменную на один
//         switchTreck(treck); // Меняем песню.
//     } else { // Иначе
//         treck = 3; // Присваиваем три
//         switchTreck(treck); // Меняем песню
//     }
// });

// btnNext.addEventListener("click", function() {
//     // Проверяем что переменная treck меньше трёх
//     if (treck < 3) { // Если да, то
//         treck++; // Увеличиваем её на один
//         switchTreck(treck); // Меняем песню 
//     } else { // Иначе
//         treck = 0; // Присваиваем ей ноль
//         switchTreck(treck); // Меняем песню
//     }
// });



