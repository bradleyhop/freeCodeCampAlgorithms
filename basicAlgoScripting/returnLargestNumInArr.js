/*
 *Return an array consisting of the largest number from each provided
 sub-array. For simplicity, the provided array will contain exactly 4
 sub-arrays.
 *
 *Remember, you can iterate through an array with a simple for loop, and access
each member with array syntax arr[i].
 */

function largestOfFour(arr) {
    var largest = 0;
    for (var i in arr) {
        for (var j in arr[i]) {
            if (arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }
        arr[i] = largest;
        largest = 0;
    }
    return arr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39],
    [1000, 1001, 857, 1]]));
