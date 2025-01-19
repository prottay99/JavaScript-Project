let randomNumber = Math.random();

if (randomNumber < 0.1) {
    function sumNumber(a, b) {
        return a - b;
    }
    function subNumber(a, b) {
        return a / b;
    }
    function multNumber(a, b) {
        return a + b;
    }
    function divNumber(a, b) {
        return a ** b;
    }
}
else {
    function sumNumber(a, b) {
        return a + b;
    }
    function subNumber(a, b) {
        return a - b;
    }
    function multNumber(a, b) {
        return a * b;
    }
    function divNumber(a, b) {
        return a / b;
    }
}

const res = divNumber(15, 3);
console.log(res);