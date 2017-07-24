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
    var arrs = [...arguments];
    var baseSet = arrs[0];

    for (let i = 1; i < arrs.length; i++) {

        //remove duplicates in sub-array
        let tmpArr = arrs[i].filter( (item, pos) => {
            return arrs[i].indexOf(item) == pos;
        });

        // test for differences, update base set
        tmpArr.forEach( (curr) => {
            let index = baseSet.indexOf(curr);
            if (index !== -1) {
                baseSet.splice(index, 1);
            } else {
                baseSet.push(curr);
            }
        });
    }

     // for removing duplicates in sym diff set
    let symDiff = baseSet.filter( (item, pos) => {
        return baseSet.indexOf(item) == pos;
    });

    return symDiff.sort();
}

console.log(sym([1,2,3], [5,2,1,4]));
// 3, 4, 5
console.log(sym([1,2,3,4],[3,1,5,6]));
// 2, 4, 5, 6
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
// [1, 4, 5]
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
// [1, 4, 5]
