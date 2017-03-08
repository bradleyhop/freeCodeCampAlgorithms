/*
 *Translate the provided string to pig latin.
 *
 *Pig Latin takes the first consonant (or consonant cluster) of an English
 word, moves it to the end of the word and suffixes an "ay".
 *
 *If a word begins with a vowel you just add "way" to the end.
 *
 *Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
    var vowelMatch = str.search(/[aeiou]/i);

    if (vowelMatch === 0) {
        return str + "way";
    } else {
        var front = str.substr(0, vowelMatch);

        str = str.split("");
        for (var i = 0; i < vowelMatch; i++)
            str.shift();

        return str.join('') + front + "ay";
    }
}

console.log(translatePigLatin("consonant"));
// onsonantcay
console.log(translatePigLatin("glove"));
// oveglay
console.log(translatePigLatin("algorithm"));
// algorithmway
