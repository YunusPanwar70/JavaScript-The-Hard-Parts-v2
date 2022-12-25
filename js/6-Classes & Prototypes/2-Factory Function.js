// function userCreator(name, score) {
//     const newUser = Object.create(null);
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function () {
//         newUser.score++;
//     }
//     return newUser;
// }

// const user1 = userCreator('Will', 10);
// const user2 = userCreator('Sentence', 5);
// console.log(user1.name);
// console.log(user1.score);
// user1.increment()
// console.log(user1.score);

function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};
const userFunctionStore = {
    increment: function () {
        function add1() { this.score++; }
        add1()
    }
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
console.log(user1.score);
user1.increment();
console.log(user1.score);