/*
 *Compare and update the inventory stored in a 2D array against a second 2D array
 *of a fresh delivery. Update the current existing inventory item quantities (in
 *    arr1). If an item cannot be found, add the new item and quantity into the
 *inventory array. The returned inventory array should be in alphabetical order
 *by item.
 */


function updateInventory(arr1, arr2) {
    var oldStock = [];
    var newStock = [];

    // first, lets add the new stock to old stock, if present
    arr1.map( (old) => {
        return arr2.forEach( (comp) => {
            if (old[1] === comp[1])
                return old[0] += comp[0];
        });
    });

    // get names of stock for both arrays
    arr1.forEach( (oldName) => {
        oldStock.push(oldName[1]);
    });
    arr2.forEach( (newName) => {
        newStock.push(newName[1]);
    });

    // if new stock is not in old stock, push that array element
    newStock.forEach( (newness) => {
            if (oldStock.indexOf(newness) === -1) {
                arr1.push(arr2[newStock.indexOf(newness)]);
            }
        });

    // now sort the current inventory!
    arr1.sort( (a, b) => {
        return a[1] > b[1] ? 1 : -1;
    });

    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
// [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"],
//   [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
// [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
