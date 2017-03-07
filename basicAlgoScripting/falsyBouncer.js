/*
 *Remove all falsy values from an array.
 *
 *Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 *
 */

function bouncer(arr) {
  return arr.filter(function(test) {
      if (!test)
          return false;
      return true;
  });
}

console.log(bouncer([7, null, "ate", "", false, 9, NaN, undefined]));
// [7, "ate", 9]
