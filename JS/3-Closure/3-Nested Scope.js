function outer() {
    let counter = 0;

    function incrementCounter() {
        counter++;
        console.log(counter);
    }
    incrementCounter();
}
outer();

function outer2() {
    const teacher = 'Kyle, ';

    function inner2(age) {
        console.log(teacher + age);
    }
    return inner2;
}
const stored = outer2();
stored(22);

// const futureData = fetch('https://jsonplaceholder.typicode.com/posts');
// futureData.then(data => console.log(data))