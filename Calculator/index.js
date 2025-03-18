let input = document.getElementById('inputText');
let buttons = document.querySelectorAll('button');

let str = '';
let arr = Array.from(buttons)
console.log(arr)

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            str = eval(str);
            input.value = str;
        }
        else if (e.target.innerHTML == 'AC') {
            str = '';
            input.value = str;
        }
        else if (e.target.innerHTML == '%') {
            str = parseFloat(eval(str)) * 0.01;
            input.value = str;
        }
        else if (e.target.innerHTML == 'DEL') {
            str = str.substring(0, str.length - 1)
            input.value = str;
        }
        else {
            str += e.target.innerHTML;
            input.value = str;
        }
    })
})