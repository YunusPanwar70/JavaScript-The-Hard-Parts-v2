// Call Stack:-

// When we exicute a function at that time whatever fucntions are made that are stored in call stack and it will again create a creation face (memory locate) & code execution face and work in the same way as we talked before;

// JavaScript keeps track of what function is currently running[where's the thread of execution];

// Run a function-add to call stack

//Finish running the function-JS removes it form call stack.

// Whatever is top of the call stack:- that's the function we're currently running.

// Call Stack: Yeh ek data structure hai jo function calls ko track karta hai. Jab ek function call hota hai, toh woh call stack ke top par push ho jata hai. Jab function complete ho jata hai, toh woh stack se hat jata hai.


// const num = 3;
// function multiplyBy2(inputNumber) {
//     const result = inputNumber * 2;
//     return result;
// }
// const output = multiplyBy2(num);
// const newOutput = multiplyBy2(10);


function first() {
    second();
    console.log('First Function');
}

function second() {
    third();
    console.log('Second Function');
}

function third() {
    console.log('Third Function');
}
first();
// third
// second 
// first