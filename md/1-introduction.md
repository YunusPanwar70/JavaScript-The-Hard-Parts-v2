We will discuss five big areas of JavaScript. These five areas are the foundational pieces of JavaScript. Let us understand all this in detail:
 
### JavaScript Principles: JavaScript code kaise run hota hai
> JavaScript ek single-threaded language hai, iska matlab ek samay par ek hi task execute hota hai.
Code ko JavaScript Engine, jaise ki V8, compile aur execute karta hai.
Memory Creation Phase aur Execution Phase hoti hai jab bhi function call hota hai.

### Higher Order Functions and Callbacks: Functional programming ka key part
> Higher Order Functions: Yeh wo functions hain jo doosre functions ko as arguments lete hain ya return karte hain.
Callbacks: Yeh ek function hai jo doosre function ke andar call kiya jata hai, usually async operations ke liye.

``` javascript
function higherOrderFunction(callback) {
  return function(num) {
    return callback(num);
  };
}

function double(num) {
  return num * 2;
}
```
``` javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data); // "Data received"
});
```
const doubleFunction = higherOrderFunction(double);
console.log(doubleFunction(5)); // 10
### Closures: JavaScript ka sabse elegant aur beautiful feature
> Closure wo hota hai jab ek function apne lexical environment ko "capture" kar leta hai.
Yeh allow karta hai ek function ko, us scope ke variables ko access karna jahan wo create hua tha, even after us scope ke execution ke baad bhi.

```javascript
function outerFunction() {
  let outerVariable = "I am outside!";
  
  function innerFunction() {
    console.log(outerVariable);
  }
  
  return innerFunction;
}

const inner = outerFunction();
inner(); // "I am outside!"
```
### Asynchronous JavaScript
### Promises :- 
Yeh asynchronous operations ko handle karne ka ek way hain, jisme success ya failure ko represent karte hain.


### Classes and Prototypes: Object-Oriented Programming
> Classes: Template hoti hain objects create karne ke liye.
Prototypes: Yeh objects hote hain jinse doosre objects properties inherit kar sakte hain.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("John", 30);
person1.greet(); // Hello, my name is John and I am 30 years old.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("John", 30);
person1.greet(); // Hello, my name is John and I am 30 years old.

```
### Becoming Autonomous Problem Solvers: Code ke through self-sufficient problem solvers banna

#### Event Loop:
JavaScript ka asynchronous behavior event loop se handle hota hai. Yeh continuously call stack aur task queues ko check karta hai aur available tasks ko execute karta hai.


#### Lexical Scoping: 
Yeh rules define karta hai ki variables ko kaise lookup kiya jata hai. Nested functions apne parent scope ke variables ko access kar sakti hain.



1. Principles of JavaScript
2. Callbacks & Higher order functions
3. Closure (scope and execution context)
4. Asynchronous JavaScript & the event loop
5. Classes & Prototypes (OOP)