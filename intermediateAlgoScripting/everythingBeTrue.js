/*
 *Check if the predicate (second argument) is truthy on all elements of a
 collection (first argument).
 *
 *Remember, you can access object properties through either dot notation or []
 notation.
 */

function truthCheck(collection, pre) {
    var truthy = false;
    for (var i in collection) {
        if (collection[i].hasOwnProperty(pre)) {
            if (collection[i][pre]) {
                truthy = true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return truthy;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"},
    {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"},
    {"user": "Po", "sex": "female"}], "sex"));
// true
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"},
    {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"},
    {"user": "Po", "sex": "female"}], "sex"));
// false
console.log(truthCheck([{"name": "Pete", "onBoat": true},
    {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}],
    "onBoat"));
// false
console.log(truthCheck([{"single": "yes"}], "single"));
// true
