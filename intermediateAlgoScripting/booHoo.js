/*
 *Check if a value is classified as a boolean primitive. Return true or false.
 *
 *Boolean primitives are true and false.
 */

function booWho(bool) {
    // We could also check the value of bool for true or false,
    //  but typeof() is nice
    if (typeof(bool) === "boolean") {
        bool = true;
    } else {
        bool = false;
    }
    return bool;
}

console.log(booWho(null));
// true
console.log(booWho(NaN));
// false
console.log(booWho("a"));
// false
