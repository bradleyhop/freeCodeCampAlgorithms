/*
 *Repeat a given string (first argument) num times (second argument). Return an
 empty string if num is not a positive number.
 */

// The Javascript repeat method does not take negative numbers. This does.
function repeatStringNumTimes(str, num) {
    return num >= 0 ? str.repeat(num) : "";
}

console.log(repeatStringNumTimes("abc", 3));
// abcabcabc
console.log(repeatStringNumTimes("foobar", -1));
//

