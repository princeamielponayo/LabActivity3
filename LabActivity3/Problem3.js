// Problem 3: Prime Number Checker
let base = 1;

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let numToCheck = base + 10; // 1 + 10 = 11
console.log(numToCheck, "is prime?", isPrime(numToCheck));
