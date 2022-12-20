// Generalized functions alag-alag data ke saath kaam karne ke liye flexible aur reusable hote hain.

// Why do even have functions let's look at that;
// create a function that thakes no input and 10 squared
// What is the syntax the exect code we type;

function tenSquared() {
    return 10 * 10;
}
console.log(tenSquared());

function squaredNum(num) {
    return num * num;
}
console.log(squaredNum(10));
console.log(squaredNum(5));
console.log(squaredNum(8));

function nineSquared() {
    return 9 * 9;
}
console.log(nineSquared());

function squareNum(num) {
    return num * num;
}
console.log(squareNum(10));; // 100
console.log(squareNum(9));; // 81
console.log(squareNum(8));; // 64