// Higher Order Functions =>  A function that takes another function(s) as an argument(s) and/or returns a function as a value.

// Callback functions => A function that is passed to another function.

// Higher order function example :-

function copyArray(arr, instructions) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(instructions(arr[i]));
    }
    return newArr;
};
const arr2 = [1, 2, 3];
function multiplyBy2(input) {
    return input * 2;
};
console.log(copyArray(arr2, multiplyBy2));

function copyArrayAndMultiplyBy2(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i] * 2);
    }
    return output
};

const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);
console.log(result);

function logArray(arr) {
    console.log(arr);
}

function multiplyBy2() {
    return 10 * 2;
}

function multiplyBy3() {
    return 10 * 3;
}
logArray([1, 2, 3, 4])