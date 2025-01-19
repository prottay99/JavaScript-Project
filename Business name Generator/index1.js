// Business name generator using function

function genarateName(x, y, z) {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return x;
    }
    else if (random === 1) {
        return y;
    }
    else if (random === 2) {
        return z;
    }
}

let genarate = genarateName("Creazy", "Amazing", "Fire") + " " + genarateName("Engine", "Foods", "Garments") + " " + genarateName("Bros", "Limited", "Hub");
console.log(genarate);