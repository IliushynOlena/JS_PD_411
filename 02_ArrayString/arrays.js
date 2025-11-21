
let obj = new Object();
//-----------------1 ----------------
// console.log(`a: ${a}`)
// let a = 5;
// console.log(`a: ${a}`)

// let a = "hello";
// console.log(`a: ${a}`)

// let a = true;
// console.log(`a: ${a}`)

var array = new Array();
console.log(`Length : ${array.length}`)
array[0] = 100;
array[1] = 200;
array[2] = 300;
console.log(`Length : ${array.length}`)
//---------------------- 2 --------------
var array = new Array(6.5,2.2,0.33,15,47,89);

for (let i = 0; i < array.length; i++) {
   console.log(`Element [${i}] - ${array[i]}`)    
}

//----------------- 3 ------------
var array = [] //empty array
var array = [3,-5,6,14,2.5,6.9,10,6, 147]//8
console.log(`Length : ${array.length}`)

console.log(array[0]);
array[0] = 1000;
console.log(array[0]);

array[8] = 77;
for (let i = 0; i < array.length; i++) {
   console.log(`Element [${i}] - ${array[i]}`)    
}

// array[80] = 777;
// console.log(`Array : ${array}`)
//---------------- 1 - for -----------
// for (let i = 0; i < array.length; i++) {
//    console.log(`Element [${i}] - ${array[i]}`)    
// }

//------------- 2 - forEach - -------------
array.forEach(() =>{
     console.log(`Element  *********  `)  
})
array.forEach((el) =>{
     console.log(`Element  ${el}`)  
})

array.forEach((elem, index)=>
{
    console.log(`Element [${index}] : ${elem}`)    
})

//----------------- 3 -  forof---------------
for (const element of array) {
    console.log(element);
}
//---------------- 4 -  forin -----
for (const index in array) {
     console.log(index);      
}

//-=-=-=-=-=-=-=-==-= Array Method -=-==-=-=--=-=-==-=-=-
console.log("Original array : ",array)

// push - add to the end ---
array.push(777);
console.log("Array : ",array)

// pop - delete from the end
array.pop();
console.log("Array : ",array)

// shift - delete first element ---
array.shift();
console.log("Array : ",array)

//--- add to the start
array.unshift(55);
console.log("Array : ",array)


//---- find element - return index 
console.log("Index of first find element : ",array.indexOf(66));//if not found -1
console.log("Index of first find element : ",array.lastIndexOf(6));//if not found -1

//------ find - found first element by conditions
console.log("Found : ",array.find((el)=> el < 0));


//------------- Sort array --------------
array.sort();
console.log("Array after defeault sort : ",array)

//compate results 
// 0 - elements are equals
//< 0 - less
// > 0 - bigger
array.sort((a,b)=> a-b);
console.log("Array after defeault sort : ",array)

//---- delete from start index some amount elements
array.splice(2,5);
console.log("Array after defeault sort : ",array)

//---- delete from start index some amount elements
// and insert new elements in their place
array.splice(2,5,15,15,15,15,15,15);
console.log("Array after defeault sort : ",array)

//--- get copy array
var copy = array.slice(2,array.length-2);
console.log("copy : ",copy)
console.log("------------------------------------------------: ")
let array1 = [4,6,7,8,1,-4,0,99];
array1 = [];
const filtered = array1.filter((el) => el%2 == 0);
console.log("Filtered array : ",filtered)
array1[0] = 1000;
console.log(array1[0]);


const pi = "3.14";
pi = "100";





