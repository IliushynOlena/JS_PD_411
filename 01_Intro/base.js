console.log("Hello from Java Script");

///--------- variables -------
let number = 1033;            // number
let digit = 3.33;             //number
let email = "super@gmail.com";//string
let flag = false;             ///Boolean
let empty;                    //undefined
let nullObject = null;        //object
let summa = function(a,b){console.log(`${a} + ${b} = ${a+b}`)}//function
let array = [1,2,3, true, false, "red","green",[10,11,12],summa];//object
empty = 5;
console.log(number);
console.log(typeof(number));
console.log(`Number : ${number}. Type : ${typeof(number)}`);
console.log(`Digit : ${digit}. Type : ${typeof(digit)}`);
console.log(`Email : ${email}. Type : ${typeof(email)}`);
console.log(`Flag : ${flag}. Type : ${typeof(flag)}`);
console.log(`Array : ${array}. Type : ${typeof(array)}`);
console.log(array[7][1])
console.log(`Summa : ${summa}. Type : ${typeof(summa)}`);
summa(10,5)
console.log(array[8](15,25));

//dynamic typing
number = "Hello";
email = true;
console.log(`Number : ${number}. Type : ${typeof(number)}`);
console.log(`Email : ${email}. Type : ${typeof(email)}`);
console.log(`Empty : ${empty}. Type : ${typeof(empty)}`);
console.log(`Null object : ${nullObject}. Type : ${typeof(nullObject)}`);

//---------------- cycles ----------------------
const numbers = [-5,8,9,36,45,12,-11,24,7];
console.log(`Length : ${numbers.length}`)
numbers[3] = 200;
numbers[19] = 333;
//----      for - get all elements by index    ---
for (let i = 0; i < numbers.length; i++) {   
    console.log(`[${i}] - ${numbers[i]}`);
}
console.log(`Length : ${numbers.length}`)
//------ forof  (foreach - get all elements) -------------
for (const number of numbers) {
    console.log(number)
}

//------ forin - get all indexes------------
for (const key in numbers) {
    console.log(key);      
}

console.log("Hello from console");
console.warn("Some warning");
console.error("Some error");

//------------------conditions -------------
if (5 > 4)
    console.log("True")
else
    console.log("False")


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let message = (3 > 2) ? "bigger":"less";
console.log(message);

//------------------ function ------------------
function divide(a,b){
    if(b==0)
    {
        console.log("Can't divide by zero");
        return;
    }
    return a/b;  
}
function sum(a,b){
   return a+b;  
}

//alert("Result : " + divide(45,5));

let a = +prompt("Enter your number a : ")
let b = +prompt("Enter your number b : ")
alert("Result : " + divide(a,b));
alert("Result : " + sum(a,b));
