function coppyArrayManipulate(arr, instruction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(instruction(arr[i]))
    }
    return output
}
function multiplyBy2(input) {
    return input * 2
}

const result = coppyArrayManipulate([1, 2, 3], multiplyBy2);
console.log(result);


// Higher Order Functions vo functions hote hain jo doosre functions ko parameter ke roop mein le sakte hain ya unhein return kar sakte hain, jo code ko flexible banate hain.
// Whenever a functions takes another function as an argument and return it as a result that's higer order function;

// function greet(name) {
//     return function (message) {
//         console.log(`Hello,${name}! ${message}`);
//     }
// }

// const greetAlice = greet('Alice');
// const greetBob = greet('Bob');

// greetAlice('How are you?');
// greetBob('Nice to meet you');

// function parent() {
//     const a = 10;
//     return function child() {
//         return a
//     }
//     // return child;
// }
// const result = parent();
// console.log(result());

// jab bhi child parent ko lexical ke saath access karta hai ush ko clouser kehte h 

function coppyArrayDivideBy2(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i] / 2);
    }
    return output
}
const myArray = [1, 2, 3];
const result = coppyArrayDivideBy2(myArray);
console.log(result);