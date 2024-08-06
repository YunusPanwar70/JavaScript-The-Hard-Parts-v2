// let user1 = {
//     name: "Tim",
//     score: 3,
//     increment: function () {
//         this.score++;
//     }
// };

// const user2 = {};
// user2.name = "Stephanie";
// user2.score = 5;
// user2.increment = function () {
//     user2.score++
// }
// console.log(user2.score);
// user2.increment()
// console.log(user2.score);

const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function () {
    user3.score++;
};
console.log(user3);
// console.log(user3.score);
// user3.increment();
// console.log(user3.score);