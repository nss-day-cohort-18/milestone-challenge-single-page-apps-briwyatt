console.log("events.js here");


var CarLot = (function(originalCarLot){
  originalCarLot.activateEvents = function(){
    var articles = document.getElementsByClassName("thumbnail");
    for (var i = 0; i < articles.length; i ++){
      


      console.log("articles.item(i)", articles.item(i))
      articles.item(i).addEventListener("click", CarLot.handleClasses);


    }
  }

  return originalCarLot;


})(CarLot || {});