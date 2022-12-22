const obj = {
    stuName: 'Kyle',
    age: 22,
}
// console.log(obj.designation);

const obj2 = {
    stuName: 'Kyle',
    age: 22,
}

obj2.__proto__ = {
    designation: 'Devloper',
}
console.log(obj2.designation);