### 1.Thread of Execution :
> Code ko line-by-line execute karta hai. 


> JavaScript code ko line-by-line execute karta hai. Is process ko "thread of execution" kehte hain. Matlab, JavaScript interpreter ek line complete karta hai, phir next line pe jaata hai, aur is tarah se pura code run karta hai.


> JavaScript apni memory mein data (jaise strings aur arrays) save karta hai taaki hum us data ko baad mein use kar saken. Hum code (functions) bhi memory mein save kar sakte hain.



``` javascript
const num = 3;
function multipyBy2 (inputNumber){
    const result = inputNumber * 2;
    return result;
}
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
console.log(output); // Output : 6
console.log(newOutput); // Output : 20
```

### 2.Call Stack:
> JavaScript call stack ka use karta hai track karne ke liye ki kaunsa function abhi run ho raha hai.


> Stack ek data structure hai jo LIFO (Last In, First Out) principle follow karta hai. Matlab, jo cheez sabse last mein stack mein add hoti hai, woh pehle remove hoti hai.
