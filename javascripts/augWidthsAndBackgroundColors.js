
/**
 * Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
 * The first IIFE should add a public function (e.g. `loadInventory`) that loads the `inventory.json` file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. `getInventory`).
 * The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.  **
 * **** The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values.
 *   The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
 *     A car DOM element that was clicked on.
 *     A color name of your choice (see behavior requirement 5 above).
 */



 // The final IIFE should augment the object with two more functions
 //   it will hold 2 functions:
 //     function1 resets border thickness and bg color for each car element back to original values
 //     function 2 must receieve two arguments (a car DOM elemeent that was clicked on & a color name of your choice)