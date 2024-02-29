//Create prompt asking user to input froyo flavors
//userInputString
const froyoFlavors = prompt(
  "Enter froyo flavors! Separate them by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
// Split input into array
const order = froyoFlavors.split(",");

//Create Object from array
const flavorCount = {};

//Add flavors together
for (const flavor of order) {
  flavorCount[flavor] = flavorCount[flavor] ? flavorCount[flavor] + 1 : 1;
}

console.table(flavorCount);
