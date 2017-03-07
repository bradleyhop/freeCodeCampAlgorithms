/*
 *Return the remaining elements of an array after chopping off n elements from
 the head.
 *
 *The head means the beginning of the array, or the zeroth index.
 */

 function slasher(arr, howMany) {
    // pst - arrays are mutable
    arr.splice(0, howMany);
    return arr;
}

console.log(slasher([1, 2, 3], 2));
// [3]
console.log(slasher(["burgers", "fries", "shake"], 1));
// ["fries", "shake"]
