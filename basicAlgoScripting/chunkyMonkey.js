/*
 *Write a function that splits an array (first argument) into groups the length
 of size (second argument) and returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
    var tmp = [] ;
    for (var i = 0; i < arr.length; i += size) {
        tmp.push(arr.slice(i, i + size));
    }
    return tmp;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
// [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
