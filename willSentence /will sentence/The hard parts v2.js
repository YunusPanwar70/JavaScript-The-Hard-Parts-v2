function outer() {
  const num = 10; 
   function inner() {
    console.log(num)
   }
   return inner
}
const closure = outer();
closure()


log(1)

function x (){
    log(2);
}

log(3)

(function y (){
    log(4);
})()

setTimeout(log(5), 0)

log(6)

ajax(log(7), 0)

log(8)

promise(log(9), 0)

log(10)

1,3,4,6,8,10,7,9,5
// callBack Queue => 5,
// microTaks => 7,9
