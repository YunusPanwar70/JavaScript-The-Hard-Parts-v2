function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    function inner2() {
        x++;
    }

    return {
        func1: inner,
        func2: inner2
    }
}

const closures = outer();
closures.func1();
closures.func2();
closures.func1();