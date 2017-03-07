console.log("CarLot.js here");
var CarLot = (function(){
  var inventory = [];

  return {
    loadInventory: function (callback){
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      inventoryLoader.addEventListener("error", () => {
        alert("error loading inventory");
      });
      inventoryLoader.addEventListener("load", () => {
        var carData = JSON.parse(event.target.responseText);
        console.log("event.target.responseText",event.target.responseText)
        var carObjects = carData.cars;
        console.log("carObjects", carObjects);
        callback(carObjects);
        inventory = carObjects;
  });
    },
    getInventory: () => inventory
  };

})(CarLot);

//CarLot.js aka the first "original" IIFE