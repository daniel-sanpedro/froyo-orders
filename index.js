const froyoFlavors = prompt(
  "Enter froyo flavors! Separate them by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
// Split input into array
const order = froyoFlavors.split(",");

//Create Object from array
const flavorCount = {};

// Add flavors together
// for (const flavor of order) {
//   flavorCount[flavor] = flavorCount[flavor] ? flavorCount[flavor] + 1 : 1;
// }

const flavorobj = order.reduce((flavorCount, flavor) => {
  if (flavorCount[flavor]) {
    // if froyoFlavor is in object, add 1
    flavorCount[flavor] += 1;
  } else {
    // else set to 1
    flavorCount[flavor] = 1;
  }
  return flavorCount;
}, {});

console.table(flavorobj);
