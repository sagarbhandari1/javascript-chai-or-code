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
 
 
//aage ja k hum projects bnaigenge ..us projects me aksar ek shopping cart hoti hai ,,,to us shopping cart me user add kiye hi jata hai  saman..to hume pta ni kitte numbers ya kitte items ane wale hoti hai ..hume sirf price add krni hoti hai 
//esi situation bhot common hai jb humko pta nhi ki kitte arguments ane wale hai ..to hume us hisab se parameters tyar krne hote hai 

//rest operator and spread operator are same (...)(isi ko rest bola jata hai or iski ko spread /bus use case pr depend kia jata hai ki kb rest bolenge or kb spread )
//jb kitti bi values aa skti hai to hum REST operator use krte hai


function calculateCardPrice(...num1) {
    //mujhe kya krna hai ki ho bi parameter ara usko return krna hai 
    return num1
}

console.log(calculateCardPrice(200,500 ,1000 , 300)); //rest ka mtlb hai ..yh hume khule me milra hai isko ek bundle me pack kro or mujhe dedo
// ab mujhe ek array me sara data mil jaiga  ...aage ja k array me loop lga k add kr dunga 

//sometimes people also declare like this yh interview me puxa jata hai

function caculateCardPrice2( val1 , val2 , ...num2) {
    return num2 
    
}

console.log(caculateCardPrice2(200,500,4000,3000,5000));//phle do values val1 or val2 me jaingi

//hume objects bi pta hone chiye 
const user ={
    username3 : "sagar",
    price : 199,
}
//ab is object ko function me kese pass kia jata hai or kese use kia jata hai 

function handleObject(anyobject){//with anyobject taki chije generic/global rahe and  i can access any object
 console.log(`username is ${anyobject.username3} and price is ${anyobject.price}`);
 

}

handleObject(user)//function ko call krenge or fir compulsory object hi passs krna hai yha pr jese user kia 
//is trah k method me object me typesafety handle krni pdti hai 
//typescript me yh type checking ho jati hai ...vese javascript me bi ho jati hai pr code zada likhna pdta hai ,,if else k through check krna pdega 

//zaruri nhi tha ki hum vo object us trah se bna kr pass kre ..\
//another way
//yha hum direct object hi pass kr re hai 
handleObject({
    username3 : "sagar",
    price : 599,
})


// is k andar bi array bi pass kr lete hai 

const myNewArray = [ 200, 400 ,100 ,600]

//ab ek function define krna hai jo array ko accept krta hai or uski second value ko return krta hai

function returnSecondValue(getArray){
    return getArray[1] //mynewarray k aage square brackets mt lagana kuki vo genereic naam hai vo kux bi array ho skta tha hume  sirf dhyn dena hai ki mere pr kya argument ara hai ..merpe get array ara hai 
}

console.log(returnSecondValue(myNewArray)); 


 