console.log('program start');
setTimeout(() => {
    console.log('i am set timeout');
}, 1000);

Promise.resolve().then((val) => {
    console.log('promise output');
});