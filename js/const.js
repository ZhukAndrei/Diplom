let url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
let inputSearchValue = document.querySelector('#inputSearch')
let submit = document.querySelector("#submit");
let urlSabmit 
let dataJson
let preview
let i = 0
let arrTrackList = []
let divClassTrack = document.querySelector(".track");
let treckList = document.querySelector('.treckList');
let artistName;