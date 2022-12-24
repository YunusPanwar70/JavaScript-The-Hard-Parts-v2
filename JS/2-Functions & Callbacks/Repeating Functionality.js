// Repeating functionality ka matlab hai ek task ko baar-baar karna, jo humare code ko concise aur repetitive tasks ko easy banata hai.

function repeatString(str, n) {
    let repeatedString = '';
    for (let i = 0; i < n; i++) {
        repeatedString += str;
    }
    return repeatedString;
}

console.log(repeatString('Hello ', 3)); // Output: Hello Hello Hello 
console.log(repeatString('Goodbye ', 2)); // Output: Goodbye Goodbye