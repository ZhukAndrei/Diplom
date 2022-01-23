function sum2Parameter(a, b) {
  return a + b;
}



// отправка запроса и получение ответа
function createUrl() {
  //arrTreckList.length = 0;
  urlSabmit = sum2Parameter(url, inputSearchValue.value);
  //alert(urlSabmit)
  //console.log(inputSearchValue.value)
  fetch(urlSabmit, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "63139df467msh62775601a5f1143p1aa727jsna2352e2ddc8e",
    },
  })
    .then((response) => response.json())
    .then((json) => {


      
      json.data.forEach((element) => {
        // создаем массив данных для вывода в трек-лист проигрывания 

        arrTreckList.push({
          artistName: element.artist.name,
          albumName: element.album.title,
          songName: element.title,
          songPreview: element.preview,
        });
      });
    })
    .catch(err => {
      console.error(err);
      // выводим сообщение об ошибке, если превышен лимит запросов в единицу времени к АПИ
      alert ("Ошибка запроса. Повторите запрос.")
    });

// создаем шаблон ячейки музыкальной композиции с дополнительной информацией

generateTreckList = (artistName, albumName, songName, songPreview) => {
   return `<div class = "pSrc" value = '${songPreview}'>
  <li>
  Artist: <strong>${artistName}</strong> <br>
  Album: <strong>${albumName}</strong> <br>
  Song: <strong>${songName}</strong></li> <br> </div>`
}

generateMp3List = (songPreview) => {
  return `<source src="${songPreview}" type="audio/mpeg" />`
}

// =========заполняем шаблон ячейки музыкальной композиции
mp3ListHTML = arrTreckList.map((mp3) => {
  return generateMp3List(
  mp3.songPreview
  );
})
.join('');



treckListHTML = arrTreckList.map((informSong) => {
    return generateTreckList(
      informSong.artistName,
      informSong.albumName,
      informSong.songName,
      informSong.songPreview
    );
  })
  .join('');
  
if (ulTreckList.li != "") {
  arrTreckList.length = 0;
  document.querySelector('#treck').innerHTML = '';
} 
ulTreckList.innerHTML = treckListHTML;
console.log("treckListHTML: ", treckListHTML);
document.querySelector('#treck').innerHTML = mp3ListHTML;
console.log("mp3ListHTML: ", mp3ListHTML);


}
// проверяем создание массива
console.log('arrTrecklist: ', arrTreckList);

//делегируем события списка песен

//ЗАПУСКАЕТ НО НЕ ВЫКЛЮЧАЕТ!!!!
ulTreckList.onclick = e => {
  //e.stopPropagation();
  let srcDiv = e.target.closest('div');
console.log(srcDiv);
if (srcDiv!== '') {
  playPause()
  let srcRef = srcDiv.getAttribute('value');
  console.log('srcRef', srcRef)
  let choiceAudio = new Audio (srcRef)
  choiceAudio.play()
}
}

//function playAudio() {
  //treck.pause();
        //controlBtn.innerText = "Play";
        
        //treck.play()
      
//}


// возможно поможет при авозапуске песни

// audio_file.onchange = function(){
//   var files = this.files;
//   var file = URL.createObjectURL(files[0]); 
//   audio_player.src = file; 
//   audio_player.play();
// };







