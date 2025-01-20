// Factorial using for loops
function factorial(n) {
    let fact = 1;
    if (n === 0)
        return 1;
    for (let i = 1; i <= n; i++)
        fact = fact * i;
    return fact
}

let n = prompt("Enter a value for calculate factorial");

console.log(factorial(n));