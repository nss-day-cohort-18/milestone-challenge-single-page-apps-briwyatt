console.log("borderChange.js here");
var CarLot = (function(originalCarLot){
  originalCarLot.handleClasses = function(event){
    console.log("function handleClasses triggered");
        console.log("event.target", event.target);
                console.log("event.currentTarget", event.currentTarget);


    // removeClasses();
    addSelected();
    inputSelect();
    // textMirror(event.currentTarget);
  };



  function removeClasses(){
    // Loop and remove Classes
    var rm = document.getElementsByClassName("thumbnail");
  
    for (var i = 0; i < 5; i ++){
      // event.target.ClassList.remove("gray");

    }
  }

  function addSelected(event){
    //added class to event.target
    console.log("toggling!");
    document.body.classList.toggle("green");


  // event.currentTarget.addEventListener("click", )
  // event.currentTarget.classList.add("gray");
  }

  function inputSelect(){
    var input = document.getElementsByClassName("input");
    input.value = event.currentTarget.childNodes.innerHTML;
  }

  function textMirror(articles) {
    input.addEventListener("keyup", function (event){
      var inputText = input.value;
      if(articles.classList.contains("gray")){
        articles.childNodes[i].innerHTML = innerText;
      }
    });
  }

  return originalCarLot;

})(CarLot || {});


//borderChange functions aka "the final IIFE"