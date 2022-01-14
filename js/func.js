function createUrl(x, y) {
  return x + y;
}


  submit.addEventListener("click", () => {
    urlSabmit = (createUrl(url, inputSearchValue.value))
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
  .then((json) => console.log(json))
  .catch((err) => console.error(err));
});




