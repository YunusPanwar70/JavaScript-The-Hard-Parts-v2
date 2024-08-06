function copyArrayAndMultiplyBy2(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) { // Run the loop till the length of the array.
        output.push(arr[i] * 2); // That's the repeating functionality the for loop running again n again and multiply value;
    }
    return output
}
const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);
console.log(result);

function copyArrayAndDivideBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] / 2);
    }
    return output;
}
const myArray2 = [1, 2, 3];
const result2 = copyArrayAndDivideBy2(myArray2);
console.log(result2);