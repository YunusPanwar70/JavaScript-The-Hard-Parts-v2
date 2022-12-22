class scStudent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        const data = 'Hello';
        console.log(data);
    }
}

const obj = new scStudent('John', 19);
console.log(obj);

class secondStudent extends scStudent { }
const user = new secondStudent('Sentence', 20);
console.log(user);

function curry(a) {
    return function (b) {
        return function (c) {
            return a(b, c);
        }
    }
}

function sum(a, b) {
    return a + b;
}

const result = curry(sum);
console.log(result(10)(10));