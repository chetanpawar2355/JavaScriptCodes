async function loading() {
    return new Promise((resolve, reject) => {
        let a = 5;
        if (a <= 10) {
            setTimeout(() => {
                resolve("Yes")
            }, 2000);
        }
        else {
            reject("404 Error")
        }
    })
}

async function main() {
    await loading().then((aa) => {
        console.log(aa);
    }).catch((err) => {
        console.log(err);
    })
}

main()