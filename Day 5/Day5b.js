async function api() {
    let f = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let x = await f.json();
    console.log(x);
}

async function main() {
    await api();
}
main()