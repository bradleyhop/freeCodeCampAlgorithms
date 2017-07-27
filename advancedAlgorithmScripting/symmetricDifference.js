/*
 *Create a function that takes two or more arrays and returns an array of the
 *symmetric difference (△ or ⊕) of the provided arrays.
 *
 *Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the
 *mathematical term "symmetric difference" of two sets is the set of elements
 *which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For
 *every additional symmetric difference you take (say on a set D = {2, 3}), you
 *should get the set with elements which are in either of the two the sets but
 *not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 */

function sym(args) {
    // put all arguments into an array
    var arrs = [...arguments];
    // array to test differances against
    var baseSet = arrs[0];

    // start comparing at second set
    for (let i = 1; i < arrs.length; i++) {

        // test for differences, update base set
        eliminateDupes(arrs[i]).forEach( (curr) => {
            let index = baseSet.indexOf(curr);
            if (index !== -1) {
                baseSet.splice(index, 1);
            } else {
                baseSet.push(curr);
            }
        });
    }

    return eliminateDupes(baseSet).sort();
}

// takes in an array, removes duplicate elements, returns array with no dupes
function eliminateDupes(arr) {
    return arr.filter( (itm, pos) => {
        return arr.indexOf(itm) == pos;
    });
}

console.log(sym([1,2,3], [5,2,1,4]));
// 3, 4, 5
console.log(sym([1,2,3,4],[3,1,5,6]));
// 2, 4, 5, 6
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
// [1, 4, 5]
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
// [1, 4, 5]
