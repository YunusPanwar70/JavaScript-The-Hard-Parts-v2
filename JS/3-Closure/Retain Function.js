function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }
    return inner
}

const innerFunc = outer();
innerFunc(); //Output: 10