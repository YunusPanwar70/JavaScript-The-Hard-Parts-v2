function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }
    return inner
}

const innerFunc = outer();
innerFunc(); //Output: 10

function outer() {
    let counter = 0;
    function incrementCounter() {
        return counter++
    }
    return incrementCounter;
}
const myFunction = outer();
console.log(myFunction());
console.log(myFunction());
console.log(myFunction());