/*
 *Sum all the prime numbers up to and including the provided number.
 *
 *A prime number is defined as a number greater than one and having only two
 divisors, one and itself. For example, 2 is a prime number because it's only
 divisible by one and two.
 *
 *The provided number may not be a prime.
 */

function sumPrimes(num) {
    var sum = 0;

    // 1 doesn't count as a prime, so start at two
    for (var i = 2; i <= num; i++) {
        if (isPrime(i))
            sum += i;
    }

    return sum;
}

function isPrime(test) {
    // Two optimizations here: /2 eliminates even numbers;
    //  a number's largest factor is only as great as its square root
    for (var i = 2; i <= Math.floor(Math.sqrt(test)); i++)
        if (test % i === 0)
            return false;
    return true;
}

console.log(sumPrimes(10));
// 17
