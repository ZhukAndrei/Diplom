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
}
// проверяем создание массива
console.log('arrTrecklist: ', arrTreckList);
// создаем шаблон ячейки музыкальной композиции с дополнительной информацией

generateTreckList = (artistName, albumName, songName, songSource) => {
  return `
  <li>
  <p>Artist: ${artistName}</p>
  <p>Album: ${albumName}</p>
  <p class = 'pSrc' src = '${songSource}'>Song: ${songName}</p>
  </li>
  `
}

// заполняем шаблон ячейки музыкальной композиции
// НЕ РАБОТАЕТ!!!! 
// arrTreckList создается, а дальше ничего не могу понять. 
// Вроде правильно написал//
treckListHTML = arrTreckList.map(informSong => {

  return generateTreckList(
    informSong.artistName, 
    informSong.albumName, 
    informSong.songName, 
    informSong.songSource);
}).join()
// проверяем шаблон ячейки музыкальной композиции
console.log('treckListHTML: ', treckListHTML)

// выводим в BODY трек-лист 
// НЕ РАБОАЕТ!!!
ulTreckList.innerHTML = treckListHTML;


