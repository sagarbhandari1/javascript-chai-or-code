const score = 400 
console.log(score);//isme automatically defined hua hai ki number type ka hai


const balance = new Number(100) //isne specially cast kia hai ki yh number hai ....isme protype k through kuc properties bi milti hai 
console.log(balance)

//some properties provide by prototype

console.log(balance.toString()); 
console.log(balance.toString().length);
console.log(balance.toFixed(2));//jb hum e commerce website bna rhe hai to usme value poiint k bad zada aa jati hai to ise hume wha use krna chiye

const otherNumber =23.8966

console.log(otherNumber.toPrecision(3));

const otherNumber2 = 123.8966
console.log(otherNumber2.toPrecision(3));

console.log(otherNumber2.toPrecision(4));


const otherNumber3 = 1123.8966
console.log(otherNumber3.toPrecision(3));

const hundreds = 1000000 //yh numders ginna ya calculate krna bda hi difficult hota hai 
//some methods jis se representation easy ho skta hai 
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));//for indian values

///FOR COMPETITIVE PROGRAMMING AND DSA

//number ek datatype hai humare pass  is k sath hi attached hume properties milti hai 
//NUMBER.isSafeInteger
//NUMBER.MAX_VALUE
//NUMBER.MIN_SAFE_INTEGER


//********************************MATHS */

//maths library javascript k sath by default ati hai 

console.log(Math);//to access more prop use it in console

console.log(Math.abs(-4));//minus qwalue ko positive kr deta hai 
console.log(Math.round(4.6));

console.log(Math.ceil(4.2));//isme yh top wali value hi lega jese 4.2 ko 5 
console.log(Math.floor(4.9));//output will be 4

//jese power hai toh ** k bajai Math.pow()kr skte hai

console.log(Math.min(45,46,35,99));//will give minimum value

console.log(Math.random());//values humesa 0 se 1 k bich igi 
console.log((Math.random()*10)+1);//yha hume us point ko shift kr rhe hai pr vo value agr 0.01 hui toh vo 0 na de isilioye 1 plus krdia 
console.log(Math.floor(Math.random() * 10) + 1);

// sometimes  we have to define min and max too like in stack 
 
const min = 20
const max = 60


console.log(Math.floor(Math.random()* (max - min + 1 )) + min);

















