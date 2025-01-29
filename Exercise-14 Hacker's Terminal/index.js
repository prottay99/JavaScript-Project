function randTime() {
    let rand = Math.ceil(Math.random() * 7) * 1000;
    return rand;
}

async function initialize() {
    let r = randTime()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Initializing Hacking...')
        }, r);

    })
}

async function readingFile() {
    let r = randTime()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Reading your Files...')
        }, r);

    })
}
async function passordDetected() {
    let r = randTime()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Password files Detected...')
        }, r);

    })
}
async function sending() {
    let r = randTime()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Sending all passwords and personal files to server...')
        }, r);

    })
}
async function cleaning() {
    let r = randTime()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Cleaning up...')
        }, r);

    })
}



async function main() {
    let init = await initialize();
    console.log(init);
    let read = await readingFile();
    console.log(read);
    let pass = await passordDetected();
    console.log(pass);
    let send = await sending();
    console.log(send);
    let clean = await cleaning();
    console.log(clean);
}

main();

