/*
 *Compare two arrays and return a new array with any items only found in one of
 the two given arrays, but not both. In other words, return the symmetric
 difference of the two arrays.
 */

function diffArray(arr1, arr2) {
  return arr1.filter(value => (arr2.indexOf(value) === -1))
        .concat(arr2.filter(value => (arr1.indexOf(value) === -1)));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// [4]
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// ["pink wool", "diorite"].
