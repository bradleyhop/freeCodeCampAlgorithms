/*
 *You will be provided with an initial array (the first argument in the
 destroyer function), followed by one or more arguments. Remove all elements
 from the initial array that are of the same value as these arguments.
 *
 *Remember to use Read-Search-Ask if you get stuck. Write your own code.
 */

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments).splice(1);

    return arr.filter(function(value) {
        return args.indexOf(value) === -1;
    });
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
// [1, 5, 1]
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// [1, 1]
