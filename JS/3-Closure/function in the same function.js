// function outer() {
//     let counter = 0;
//     function incrementCounter() {
//         counter++;
//     }
//     incrementCounter();
//     console.log(counter);
// }
// outer();

function outer() {
    let count = 0;
    function incrementCounter() {
        count++;
        return count; // count ki updated value return kari jati hai
    }
    return incrementCounter;
}

const myNewFunction = outer();
console.log(myNewFunction()); // Output: 1
console.log(myNewFunction()); // Output: 2
console.log(myNewFunction());
console.log(myNewFunction());
console.log(myNewFunction());