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
   return `
  <li class = "pSrc" src = '${songPreview}'>
  Artist: <strong>${artistName}</strong> <br>
  Album: <strong>${albumName}</strong> <br>
  Song: <strong>${songName}</strong></li> <br>`
}

generateMp3List = (songPreview) => {
  return `<source src="${songPreview}" type="audio/mpeg"/>`
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
ulTreckList.onclick = e => {
  e.stopPropagation();
  playPause();
  let etarget = e.target
console.log(etarget.querySelector("source").src);


}

// возможно поможет при авозапуске песни

// audio_file.onchange = function(){
//   var files = this.files;
//   var file = URL.createObjectURL(files[0]); 
//   audio_player.src = file; 
//   audio_player.play();
// };







