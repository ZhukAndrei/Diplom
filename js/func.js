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

//ulTreckList.removeChild(".pSrc");
//ulTreckList.innerHTML = '';

generateTreckList = (artistName, albumName, songName, songPreview) => {
   return `
  <li class = "pSrc" src = '${songPreview}'>
  Artist: ${artistName} 
  Album: ${albumName} 
  Song: ${songName}
  </li>
  `
}

// // =========заполняем шаблон ячейки музыкальной композиции
treckListHTML = arrTreckList
  .map((informSong) => {
    return generateTreckList(
      informSong.artistName,
      informSong.albumName,
      informSong.songName,
      informSong.songPreview
    );
  })
  .join();
if (ulTreckList.li != "") {
  arrTreckList.length = 0;
  // const removeTreckList = () => {
  //   while (ulTreckList.firstChild) {
  //     ulTreckList.removeChild(ulTreckList.firstChild);
  //   }
  //   removeTreckList();
  // };
  
} 
ulTreckList.innerHTML = treckListHTML;
console.log("treckListHTML: ", treckListHTML);


}
// проверяем создание массива
console.log('arrTrecklist: ', arrTreckList);











