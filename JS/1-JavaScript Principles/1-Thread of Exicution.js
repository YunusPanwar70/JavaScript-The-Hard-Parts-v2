// Jab JavaScript code chalta hai, yeh do cheezein check kart hai:

// Code ko line-by-line execute karta hai, har line ko chalta hai - isey "thread of execution" kehte hain.

// Strings, arrays jaise data ko ya code ko yaad rakhta hai takay hum baad mein us data ya code ko istemal kar sakein - yeh apni memory mein rakhta hai.

const num = 3;

function multiplyBy2(inputNumber) {
    const result = inputNumber * 2;
    return result;
}
const output = multiplyBy2(num);
console.log(output); // Output : 6
const newOutput = multiplyBy2(10);
console.log(newOutput); // Output : 20