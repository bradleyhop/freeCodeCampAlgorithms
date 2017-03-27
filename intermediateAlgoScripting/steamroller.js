function steamrollArray(arr) {

    var flattened = function(arr) {
        return arr.reduce(function(acc, val) {
            // use recursion to get to a value, not an array
            return acc.concat(Array.isArray(val) ? flattened(val) : val);
        }, [] );
    };

    return flattened(arr);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
// [1, 2, 3, 4]
