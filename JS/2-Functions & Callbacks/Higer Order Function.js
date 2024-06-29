// Higher Order Functions vo functions hote hain jo doosre functions ko parameter ke roop mein le sakte hain ya unhein return kar sakte hain, jo code ko flexible banate hain.
// Whenever a functions takes another function as an argument and return it as a result that's higer order function;

function greet(name) {
    return function (message) {
        console.log(`Hello,${name}! ${message}`);
    }
}

const greetAlice = greet('Alice');
const greetBob = greet('Bob');

greetAlice('How are you?');
greetBob('Nice to meet you');