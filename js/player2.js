
let audio = document.getElementById("audio");    // Берём элемент audio
let time = document.querySelector(".time");      // Берём аудио дорожку
let btnPlay = document.querySelector(".play");   // Берём кнопку проигрывания
let btnPause = document.querySelector(".pause"); // Берём кнопку паузы
let btnPrev = document.querySelector(".prev");   // Берём кнопку переключения предыдущего трека
let btnNext = document.querySelector(".next");   // Берём кнопку переключение следующего трека
// Массив с названиями песен
let playlist = [
    'https://cdns-preview-d.dzcdn.net/stream/c-dc72b1c3b569b903db2c75969db478d1-7.mp3',
    'https://cdns-preview-6.dzcdn.net/stream/c-674de2b27cee8d205a0be318c8a6d1c1-3.mp3',
    'https://cdns-preview-9.dzcdn.net/stream/c-9b1db108fdac3a188fc2e5021713b272-3.mp3',
    'https://cdns-preview-9.dzcdn.net/stream/c-9acbddfaa6e02061efa9e80cfa50f951-9.mp3',
];
 
let treck; // Переменная с индексом трека
 
// Событие перед загрузкой страницы
 window.onload = function() {
    treck = 0; // Присваиваем переменной ноль
 }
 function switchTreckNext() {
    if(g === audio.length) {
      g = 0;
    }
    audio.src = `${audio[g]}`;
    g++;
  };

  function switchTreckPrev() {
    if(g === 0) {
      g = audio.length;
    }
    audio.src = `${audio[g]}`;
    g--;
  };



 // function switchTreck () {//numTreck
//     // Меняем значение атрибута src
//     //audio.src = './audio/' + playlist[numTreck];
//     // Назначаем время песни ноль
//     audio.currentTime = 0;
//     // Включаем песню
//     audio.play();
//}
btnPlay.addEventListener("click", function() {
    audio.play(); // Запуск песни
    // Запуск интервала 
    audioPlay = setInterval(function() {
        // Получаем значение на какой секунде песня
        let audioTime = Math.round(audio.currentTime);
        // Получаем всё время песни
        let audioLength = Math.round(audio.duration)
        // Назначаем ширину элементу time
        time.style.width = (audioTime * 100) / audioLength + '%';
        // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
        // И проверяем что переменная treck меньше четырёх
        // if (audioTime == audioLength && treck < 3) {
        //     treck++; // То Увеличиваем переменную 
        //     //switchTreck(treck); // Меняем трек
        //     switchTreckNext()
        // // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
        // } else if (audioTime == audioLength && treck >= 3) {
        //     treck = 0; // То присваиваем treck ноль
        //     //switchTreck(treck); //Меняем трек
        //     switchTreckPrev();
        //}
    }, 10)
});
btnNext.addEventListener('click', function() {
    switchTreckNext();
    audio.pause()
    audio.currentTime = 0;
  });


btnPause.addEventListener("click", function() {
    audio.pause(); // Останавливает песню
    clearInterval(audioPlay) // Останавливает интервал
});
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
//     // Проверяем что переменная treck больше трёх
//     if (treck < 3) { // Если да, то
//         treck++; // Увеличиваем её на один
//         switchTreck(treck); // Меняем песню 
//     } else { // Иначе
//         treck = 0; // Присваиваем ей ноль
//         switchTreck(treck); // Меняем песню
//     }
// });

