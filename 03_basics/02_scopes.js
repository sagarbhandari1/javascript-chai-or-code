//scope ki khanani 3 key word se start hoti hai  let , var , const 

//let a = 10
//const b = 20
//var c = 30



//console.log(a);
//console.log(b);
//console.log(c);
// jb 3no variable me var  kaam kr rhe hai toh zarurat hi kya thi is let or const ko lane ki 
//isko le k isiliye i kuki yh jo chij hai humare block scope ko jo ki hona chiye tha us ki trah kam nhi krta 
//khani me dikkat ati hai jb ata hai curly braces { } , isi ko bolte hai scope , curly braces har programming language ka scope hai 
//yh curky braces hume function me dika tha ,if else me bi dikega  or bi khi jagah dikega 
//objects me bi curly braces hote hai pr vo object declaration hai 

if(true){
   let a= 10
    const b = 20
    var c = 30

}//in sb ka scope sirf if k curly braces tk ka hai 
//yh agr is line 24 me phoch gya tb problem hai kuki ab agr koi bhar values hai a,b,c to vo clash hongio

//console.log(a);// yh bi shi hai kux print nhi kr ra 
//console.log(b);// yh bi sahi hai
console.log(c);// yh 30 print kr rha or yh hi hai sbse bdi problem
// isilye var se declare nhi krna chiye

 var d = 300 //suppose ek dusre programmer ne yha value di

 if(true){
    let a= 10
    const b= 20
    var d= 50
    e= 60

 }//if k andar hai block scope or bki sb hai global scope 
 console.log(d);// yha 300 ana chiye pr if else k andar ki value ari
 console.log(e);
 
//global scope wali values block scopes k andar bi available hongi 
//lekin block wali bhar nhi jani chiye

let a= 300
if(true){
    let a = 39
    const b = 20
    console.log(`inner ${a}`);
    

}
 console.log(a);

 //windows me scope kya hota hai 
 //jb hum browser me gai , inspect kia ,yha pr console me ja k scope vo alg hai
 //or jo ccde enviroment me node k through krte hai vo alg hai 

//NESTED SCOPE

function one() {
    const username ="sagar"

    function two() {
        const websites = "youtube"
        console.log(username);//check kr krh hai ki if we can access username or not 
        
        
    }
   // console.log(wesites); //it will show error
    two()
    
}
one()

if (true) {
    const username ="manav"
    if (username==="manav") {
        const websites =" youtube"
        console.log(username + websites);
        
    }
    //console.log(websites);//cant be access outside scope
    
}
//console.log(username);//cant be accessed outside scope 

//+++++++++++++++++++++++++INTRESTING+++

function addone(num){
    return num +1
}
addone(5)// agr hum funcion call phle krde or fir declare kre to yh chlega
//abhi sirf return hua hai value print nhi hui hai 

//ab exactly isi chij ko hum kai jagah dusre tarike se hote ve dekenge 

const addtwo = function(num){
    return num +2
}
addtwo(23)//agr hum isme function call phle kre or declare bdme kre to yh nhi chlega ..kuki yha hum use ek variable me hold bi krre hai 

//java script me variables bhot powerful hote hai vo kuxbi hold kr skte hai jese json values ,fumctions.......
//addone jo hai vo basic function hai 
//addtwo  bi function hi hai lekin kbhi kabar expresssion bi bol dia jata hai 

//these are two technies how functions are made ...and there are many

//hoisting ia a concept of how functions are declared kha unko rakha jata hai .kya unka execution context hai kese ek tree bnta hai jha sare variables rke jate hai 


