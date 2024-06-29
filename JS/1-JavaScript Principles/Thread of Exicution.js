// Jab JavaScript code chalta hai, yeh do cheezein karti hai:

// Code ko line-by-line execute karti hai, har line ko chalti hai - isey "thread of execution" kehte hain.
// Strings, arrays jaise data ko ya code ko yaad rakhti hai takay hum baad mein us data ya code ko istemal kar sakein - yeh apni memory mein rakhti hai.

const num = 3;

function multiplyBy2(inputNumber) {

    const result = inputNumber * 2;

    return result;
}

const output = multiplyBy2(num);
console.log(output); // Output : 6

const newOutput = multiplyBy2(10);
console.log(newOutput); // Output : 20

// Is example mein, humne ek function multiplyBy2 define kiya hai jo ek input number ko double karke return karta hai. Fir, humne is function ko use karke output aur newOutput variables mein result store kiya hai.

// JavaScript mein, variables ko label ke saath data bind kiya jata hai, jise hum phir later use kar sakte hain. Is code mein, num variable ke andar 3 rakha gaya hai, jo hum later use kar rahe hain multiplyBy2 function ke liye.

// Is code ke zariye hum samajh sakte hain ki kaise JavaScript code execute hota hai aur kaise hum functions ka istemal karke code ko organize aur reusable banate hain.