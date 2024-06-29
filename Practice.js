// jab hum kisi function ko call karte he to wo call stack ke (memory locate) me sotre ho jata hai our jab ush function ka kaam khtm ho jata h to javascript ush function ko bahr nikaal deti h

// function a() {
//     b()
//     return console.log("I am One");
// }

// function b() {
//     c()
//     return console.log('I am Two');
// }

// function c() {
//     return console.log('I am Three');
// }
// a();

// function copy(arr, int) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(int(arr[i]))
//     }
//     return newArr
// }

// let arr2 = [1, 2, 3];
// function multiply(input) {
//     return input * 2
// }
// console.log(copy(arr2, multiply));

// function curry(f) {
//     return function (a) {
//         return function (b) {
//             return f(a, b)
//         }
//     }
// }

// function sum(a, b) {
//     return a + b;
// }
// const result = curry(sum);
// console.log(result(10)(20));

// function generalized() {
//     return 10 * 10;
// }
// console.log(generalized());


// call stack => jo function chaal riyo h wo batave

// exctuion context => jab bhi fucn call kar krna time jagha ri jarurat hove une keve excution context

// function firstFN(one) {
//     return one
// }
// function secoundFN(num1, num2) {
//     console.log(num1 * num2);
// }
// const result = firstFN(secoundFN(2, 8))

// function One(a) {
//     return a
// }
// function Two(b) {
//     console.log(b + ' World');
// };
// const res = One(Two('Hello'));
// res();

// function parent(callBack) {
//     return callBack
// }

// function child() {
//     console.log('Hello');
// }

// const result = parent(child);
// result();
// result => callback => child



function copyArrayAndManipulate(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}
function multiplyBy2(input) {
    return input * 2;
}
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
console.log(result);

function greet(name) {
    return function (message) {
        console.log(`Hello,${name}! ${message}`);
    }
}
const greetAlice = greet('Alice');
const greetBob = greet('Bob');
greetAlice('How are you?');
greetBob('Nice to meet you');