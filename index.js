sum2Parameter()
//Ввод URL по клику на кнопке
submit.addEventListener("click", () => {
    createUrl();
}) 

//Ввод URL по кнопке Enter
inputSearchValue.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        createUrl();
    }
  });

  
