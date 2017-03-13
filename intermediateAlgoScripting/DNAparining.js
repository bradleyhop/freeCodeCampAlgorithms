/*
 *The DNA strand is missing the pairing element. Take each character, get its
 pair, and return the results as a 2d array.
 *
 *Base pairs are a pair of AT and CG. Match the missing element to the provided
 character.
 *
 *Return the provided character as the first element in each array.
 *
 *For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 *
 *The character and its pair are paired up in an array, and all the arrays are
 grouped into one encapsulating array.
 *
 */

function pairElement(str) {
    var newar = [];

    str.split("");

    for (i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'G':
                newar.push(['G', 'C']);
                break;
            case 'C':
                newar.push(['C', 'G']);
                break;
            case 'A':
                newar.push(['A', 'T']);
                break;
            case 'T':
                newar.push(['T', 'A']);
                break;
        }
    }

    return newar;
}

console.log(pairElement("ATCGA"));
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
