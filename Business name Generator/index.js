// Business name generator using object
let random1 = Math.floor(Math.random() * 3);
let random2 = Math.floor(Math.random() * 3);
let random3 = Math.floor(Math.random() * 3);

let adjective = {
    0:'Crazy',
    1:'Amazing',
    2:'Fire',
}
let shopName = {
    0:'Engine',
    1:'Foods',
    2:'Garments',
}
let anotherWord = {
    0:'Bros',
    1:'Limited',
    2:'Hub',
}

console.log(adjective[random1],shopName[random2],anotherWord[random3]);
