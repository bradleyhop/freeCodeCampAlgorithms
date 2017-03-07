/*
 *Return the provided string with the first letter of each word capitalized.
 Make sure the rest of the word is in lower case.
 *
 *For the purpose of this exercise, you should also capitalize connecting words
like "the" and "of".
 */

function titleCase(str) {
    str = str.split(' ');
    for (var i in str) {
        var tmpstr = str[i].split('');
        // we only want the first letter capitalized, all others lowercase
        for (var j in tmpstr) {
            tmpstr[j] = tmpstr[j].toLowerCase();
        }
        tmpstr[0] = tmpstr[0].toUpperCase();
        str[i] = tmpstr.join('');
    }

    return str.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
// I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt"));
// Short And Stout
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
// Here Is My Handle Here Is My Spout
