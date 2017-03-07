/*
 *Truncate a string (first argument) if it is longer than the given maximum
 string length (second argument). Return the truncated string with a ...
 ending.
 *
 *Note that inserting the three dots to the end will add to the string length.
 *
 *However, if the given maximum string length num is less than or equal to 3,
    then the addition of the three dots does not add to the string length in
    determining the truncated string.
 */

function truncateString(str, num) {
    if (str.length > num) {
        if (num > 3) {
            return str.slice(0, num - 3) + "...";
        } else if (num <= 3){
            return str.slice(0, num) + "...";
        }
    }
    return str;
}

console.log(truncateString("This is a string", "This is a string".length));
// This is a string
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
// A-tisket...
console.log(truncateString("A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2));
// A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-", 1));
// A...
