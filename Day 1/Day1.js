// Error Handling In JavaScript By try, catch, finally and Custom error

let a = prompt("Enter the First Number: ");
let b = prompt("Enter the Second Number: ");
let sum = parseInt(a) + parseInt(b);

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("This is not Allowed. Some Syntax error occurs.");
}

function myFun() {
    let x = 10;
    try {
        console.log(sum + x);
        return true;

    } catch (error) {
        console.log(error);
        return false;
    }
    finally {
        console.log("End of the Program...");
    }
}

myFun();