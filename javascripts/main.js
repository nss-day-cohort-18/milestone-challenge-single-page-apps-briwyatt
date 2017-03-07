console.log("main.js here");

function populatePage (inventory){
  //Loop over the inventory and populate the page
for (var k in inventory){
  var carCard = ``;
  var carObject = inventory[k];
  carCard += `<article class="col-sm-4"><div class="thumbnail"><h4 class="text-primary">${carObject.make} - ${carObject.model}</h4><p class="describeEdit">${carObject.description}</p><footer class="text-right text-danger">${carObject.year} for $${carObject.price}</footer></div></article>`;
    outputEl.innerHTML += carCard;
  }

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();


}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);




// make one row after 3 cards are made(stringified?) and injected into the DOM
// end row div, new row div, 