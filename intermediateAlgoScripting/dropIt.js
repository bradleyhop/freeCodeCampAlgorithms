/*
 *Drop the elements of an array (first argument), starting from the front,
 until the predicate (second argument) returns true.
 *
 *The second argument, func, is a function you'll use to test the first
 elements of the array to decide if you should drop it or not.
 *
 *Return the rest of the array, otherwise return an empty array.
 */

function dropElements(arr, func) {
    var initArrLength = arr.length; // must remember initial length

    for (let i = 0; i < initArrLength; i++) {
        // we always want to look at the first element, esp b/c of shifting
        if (func(arr[0])) {
            return arr.slice(0);
        } else {
            arr.shift();
        }
    }

    return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
// [ 1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
// []
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
// [1, 0, 1]
