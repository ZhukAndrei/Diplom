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
    .catch((err) => {
      //console.error(err);
      // выводим сообщение об ошибке, если превышен лимит запросов в единицу времени к АПИ
      alert(
        "Ошибка запроса. Превышено количество запросов в ДЕМО-АПИ. Повторите запрос."
      );
    });

  // создаем шаблон ячейки музыкальной композиции с дополнительной информацией
  generateTreckList = (artistName, albumName, songName, songPreview) => {
    return `<div class = "pSrc" value = '${songPreview}'>
  <li>
  Artist: <strong>${artistName}</strong> <br>
  Album: <strong>${albumName}</strong> <br>
  Song: <strong>${songName}</strong></li> <br> </div>`;
  };

  generateMp3List = (songPreview) => {
    return `<source src="${songPreview}" type="audio/mpeg" />`;
  };

  // =========заполняем шаблон ячейки музыкальной композиции
  mp3ListHTML = arrTreckList
    .map((mp3) => {
      return generateMp3List(mp3.songPreview);
    })
    .join("");

  treckListHTML = arrTreckList
    .map((informSong) => {
      return generateTreckList(
        informSong.artistName,
        informSong.albumName,
        informSong.songName,
        informSong.songPreview
      );
    })
    .join("");

  if (ulTreckList.li != "") {
    arrTreckList.length = 0;
    document.querySelector("#treck").innerHTML = "";
  }
  ulTreckList.innerHTML = treckListHTML;
  console.log("treckListHTML: ", treckListHTML);
  document.querySelector("#treck").innerHTML = mp3ListHTML;
  console.log("mp3ListHTML: ", mp3ListHTML);
}
// проверяем создание массива
console.log("arrTrecklist: ", arrTreckList);

//делегируем события списка песен

choiceAudio = new Audio();
//ЗАПУСКАЕТ НО НЕ ВЫКЛЮЧАЕТ!!!! ====================================
var choiceAudio;
ulTreckList.onclick = (e) => {
  e.stopPropagation();
  let srcDiv = e.target.closest("div");
  //console.log(srcDiv);
  if (srcDiv !== "") {
    let srcRef = srcDiv.getAttribute("value");
    console.log("srcRef", srcRef);
    controlBtn.innerText = "Play";
    choiceAudio.src = srcRef;
    if (treck.paused) {
      treck.play();
      controlBtn.innerText = "Pause";
    } else {
      treck.pause();
      controlBtn.innerText = "Play";
    }

    treckPlayList = choiceAudio.play();
    playPause();
  }

}

let treckPlayList;


//   function playPause() {
//     audioPlay = setInterval(function () {
//       // Получаем значение на какой секунде песня
//       let audioTime = Math.round(treck.currentTime);
//       // Получаем всё время песни
//       let audioLength = Math.round(treck.duration);
//       // Назначаем ширину элементу time
//       time.style.width = (audioTime * 100) / audioLength + "%";
//     }, 10);
//     if (treck.paused) {
//       treck.play();
//       controlBtn.innerText = "Pause";
//     } else {
//       treck.pause();
//       controlBtn.innerText = "Play";
//     }
//   }
// };
document.querySelector("#volume").onclick = audioVolume;
function audioVolume() {
  let v = this.value;
  choiceAudio.volume = v / 100;
}

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