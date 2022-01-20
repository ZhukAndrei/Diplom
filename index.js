sum2Parameter()
//Ввод URL по клику на кнопке
submit.addEventListener("click", () => {
    urlSabmit = ""
    arrTrackList.length = 0;
    createUrl();

}) 

//Ввод URL по кнопке Enter
inputSearchValue.addEventListener('keydown', function(e) {
    urlSabmit = ""
    arrTrackList.length = 0;
    if (e.keyCode === 13) {
        
        createUrl();
        //console.log(this.value);
    }
  });

  
