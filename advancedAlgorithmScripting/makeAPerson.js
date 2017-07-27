/*
 *Fill in the object constructor with the following methods below:
 *
 *getFirstName() getLastName() getFullName() setFirstName(first)
 *setLastName(last) setFullName(firstAndLast) Run the tests to see the expected
 *output for each method.
 *
 *The methods that take an argument must accept only one argument and it has to
 *be a string.
 *
 *These methods must be the only available means of interacting with the object.
 */

var Person = function(firstAndLast) {
    // change the full name into something pliable
    let fullName = firstAndLast.split(' ');

    this.getFullName = function() {
        return fullName.join(' ');
    };
    this.getFirstName = function() {
        return fullName[0];
    };
    this.getLastName = function() {
        return fullName[1];
    };
    this.setFirstName = function(first) {
        fullName[0] = first;
    };
    this.setLastName = function(last) {
        fullName[1] = last;
    };
    this.setFullName = function(completeName) {
        fullName = completeName.split(' ');
    };
};

// don't delete the next two lines!!!
// fCC tests need these to create intial bob object person
var bob = new Person('Bob Ross');
bob.getFullName();

// now for the test calls:
console.log(Object.keys(bob).length);
// 6
console.log(bob instanceof Person);
// true
console.log(bob.getFirstName());
// Bob
bob.setFirstName("Haskell");
console.log(bob.getFullName());
// Haskell Ross
bob.setFullName("Haskell Curry");
console.log(bob.getLastName());
// Curry
