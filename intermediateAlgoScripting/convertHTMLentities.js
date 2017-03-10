/*
 *Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a
 string to their corresponding HTML entities.
 */

function convertHTML(str) {
    var htmlEntity = {
        '&':    '&amp;',
        '<':    '&lt;',
        '>':    '&gt;',
        '\"':   '&quot;',
        '\'':   '&apos;'
    };

    return str.replace(/&|<|>|"|'/g, match => htmlEntity[match]);
}

console.log(convertHTML("Dolce & Gabbana"));
// Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML('Stuff in "quotation marks"'));
// Stuff in &quot;quotation marks&quot;
