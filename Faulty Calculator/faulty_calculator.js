let random = Math.random();
console.log(random);
let a = prompt('Enter first number');
let b = prompt('Enter second number');
let c = prompt('Enter the operation[+,-,*,/]');

let obj = {
    '+': '-',
    '-': '/',
    '*': '+',
    '/': '**',
}

if (random < 0.1) {
    c = obj[c];
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
}