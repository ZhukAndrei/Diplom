function sum2Parameter(a, b) {
  return a + b;
}



// отправка запроса и получение ответа
function createUrl() {
  arrTrackList.length = 0;
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
      // console.log(
      // " Total: " + json.total +'\n', 
      // "Next: " + json.next + '\n',
      // ".than json", json);

      
      json.data.forEach((element) => {
                arrTrackList.push({
          artistName: element.artist.name,
          albumName: element.album.title,
          songName: element.title,
          songPreview: element.preview,
        });
        


        // console.log(
        //   " Artist name: " + element.artist.name + "\n",
        //   "Album name: " + element.album.title + "\n",
        //   "Song name: " + element.title + "\n",
        //   "Song preview: " + element.preview + "\n"
        // );
      });
      

      
    })
    .catch(err => {
      console.error(err);
    });
}

console.log(arrTrackList);

// document.write('<ol start="0">');
// dataJson[key].forEach( animal => {
//   document.write(`<li>ID:  ${animal.artist.id} <span style="color: #1a55cc">${animal.artist.name}</span>
//            is ${animal.preview} years old.</li>`);
// });
// document.write('<ol>');

// document.querySelector(
//   ".track"
// ).innerHTML += `${element}\n`;

//}
//let preview = dataJson.preview[5];
//let artist = dataJson.artist.name
// console.log('возврат preview', preview)

// console.log('возврат',dataJson)
// console.log(typeof(dataJson))

// json.forEach((element) => {
//   console.log(elem)
// document.querySelector(
//   ".track"
// ).innerHTML += `${element}\n`;
//});

//document.querySelector(".track").innerHTML = artist;
//document.querySelector(".track").innerHTML = `"<a href = '${preview}'></a>"`;

//}
//data.preview песня
//data.artist.name название артиста или группы
//data.artist.picture_xl картинка

// function htmlFill(data) {
//   filler = data.hits[i].recipe;
//   document.querySelector(".recipe_name").innerHTML = filler.label;
//   ingredientLines = filler.ingredientLines;
//   document.querySelector(".ingredients_recipe_list").innerText = "";
//   ingredientLines.forEach((element) => {
//     document.querySelector(
//       ".ingredients_recipe_list"
//     ).innerText += `${element}\n`;
//   });
//   document.querySelector(".main_img").src = filler.image;
//   document.querySelector(".calories").innerHTML = `Calories: ${Math.round(
//     filler.calories
//   )}`;
//   document.querySelector(".recipe_link").href = filler.url;
//   document.querySelector(".recipe_link").innerText = filler.source;
//   document.querySelector(".dishType").innerText = `Dish: ${filler.dishType}`;
//   document.querySelector(
//     ".dietLabels"
//   ).innerText = `Diet: ${filler.dietLabels}`;
//   document.querySelector(
//     ".healthLabels"
//   ).innerText = `Health: ${filler.healthLabels}`;
//   document.querySelector(
//     ".totalNutrientsd"
//   ).innerText = `Cuisine: ${filler.cuisineType}`;
// }
