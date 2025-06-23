let prom = new Promise((resolve, reject) => {
    let a = 10;
    if (a <= 10) {
        setTimeout(() => {
            console.log("The value of a is", a);
            resolve("Your problem was resolved...")
        }, 3000);
    }
    else {
        reject("Rejected Problem...")
    }
})

prom.then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('The End...');
})