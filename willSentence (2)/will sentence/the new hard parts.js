const promise = new Promise((resolve, reject) => {
  const num = 10;
  if (num <= 5) {
    resolve("first promises resovled");
  } else {
    reject("first rejected");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((reject) => {
    console.log(reject);
  });

// Promise.all()
// Promise.allSettled();
// Promise.any();
// Promise.race()
// Promise.finally();
// forAwait()
// Two facade function learn about it.