/*
 *Write a function that takes two or more arrays and returns a new array of
 unique values in the order of the original provided arrays.
 *
 *In other words, all values present from all arrays should be included in
 their original order, but with no duplicates in the final array.
 *
 *The unique numbers should be sorted by their original order, but the final
 array should not be sorted in numerical order.
 *
 *Check the assertion tests for examples.
 */

function uniteUnique(arr) {
    var flatten = function(arr) {
        return arr.reduce(function(acc, val) {
            return acc.concat(val);
        }, []);
    };

    var flatArr = flatten(Array.from(arguments));

    var newArr = [];

    for (var i in flatArr) {
        if (!(flatArr[i] in newArr ))
            newArr.push(flatArr[i]);
    }

    return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
// [1, 3, 2, [5], [4]]
