//sunction mtlb jo bi humne code likha hai 10 -15 _20 line ka usko ek package me bnd krdia vo package hum jha chai jitti bar chai le ja skte hai

console.log("s");
console.log("a");
console.log("g");
console.log("a");
console.log("r");

function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("g");
    console.log("a");
    console.log("r");

}
sayMyName()

function addTwoNumbers(number1 , number2){
    console.log(number1 + number2);
}//(number1,number2 ) yh hote hai parameters jb hum function ki defination bnate hai to jo input ho vo hote hai parameters

 addTwoNumbers(3,4)//jb function call ho toh vo hai arguments 
 addTwoNumbers(3 , "4")

 const result = addTwoNumbers(5,8)
console.log("result is :",result );//yha undefined iga 

//yhi imp concept hai ki function se apne kya wapis bhja ,khi log glt smj lete hai ki console log hai to yhi value wapis ki gyi hai ...jb ki esa nhi hai ..console print krne ka yh mtlb nhi ki vo function vo value return bi krra hai 
//console ka kam sirf console print krna hai

function addTwoNumbers2(number1 , number2){
    let result = number1 + number2 
    return result // jb return krdia us k bd koi code execute nhi hoga
    console.log("hitesh");
    //return number1 + number2 //yh bi kr skte hai
    
}
// scope is ... ek result jo function k andar hai is different from other one 
const result2 = addTwoNumbers2(8,9)
console.log("result"  ,result2);

//or kitte tarike se value pass krai ja skti hai ya li ja skti hai 

function loginUserMessage(username) {
    return `${username} just logged in `
    
}

loginUserMessage( "sagar bhandari")

//kux print nhi hoga ,function execute hoga lekin us function ne values return krdi lekin na humne print krne k liye bola na store krne k liye 
 console.log(loginUserMessage("sagar bhandari"));
 console.log(loginUserMessage(""));
 console.log(loginUserMessage());//result will be undefined

 function loginUserMessage2(username2) { // agr hum chate hai ki atleast kux to print ho to hum(username2 =sam ) kr skte hai fir if condition nhi chlegi 
    if(username2 === undefined) //if(!undefined) ese bi likh skte hai
    { 
        console.log("please enter a username");
        return
    }
    return `${username2} just logged in `
    
 }
 console.log(loginUserMessage2(""));
 
 

 