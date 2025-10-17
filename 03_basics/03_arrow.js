const user ={
    username :"sagar",
    price : 999 ,

    welcomeMessage :function(){

      console.log(`${this.username}, welcome to websites `);//this is used for current context mtlb ki abhi mujhe is block ka username do 
console.log(this);

    }
}
//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()// sam iga kuki value humne hardcore nhi kri thi ,humne kha tha jo bi current context hai us context k andar username ki value hai vo print kro ...context mtlb values

console.log(this);//it will give empty {} ,kuki hum node enviroment k andar hai ,jb hum node me hote hai this empty object  ko refer krta hai ,kuki abhi global k andar context hi nhi hai 

//jb log browser me krte hai  console.log(this) toh WINDOW  ata hai 
//phle k time me javascript ko ek hi tarika tha execute krne ka vo tha browser k andar ..jo engine tha vo browser me hi paya jata tha ...us engine ko nikala or alga alga naam dine jese node,dino,bun 
//ab hum pr engine stand alone hai 
//toh browser k andar sbse zada jo global object hai vo hai window //INTERVIEW ME PUXTE HAI


/*function chai() {
   let username = "sagar"
   console.log(this.username);
    
}*/
//chai() // jb sirf this kro ab bhot sari values output ari ..kux global value kux micro task .....
//this.username me output undefined ara ..yh jo context hai sirf object me kaam kr rha hai ese functions me aa k this use nhi kr para hu 

// more ways to declare function especially arrow function k through
/*const chai = function() {
    let username = "sagar"
    console.log(this.username);
    
    
}*/

const chai = ()=>{

let username = "sagar"
    console.log(this);
}//yh ahi arrow function
chai()

//pure arrow function pt charcha 
//syntax ()=>{}
    const addTwo = (num1,num2)=>{
let num3 = num1 +num2 
return num3
    }
console.log(addTwo(6,7));

//implicit return
 //isme hume yh { } use nhi krne pdte 
 //implicit return ka mtlb hai ki me man leta hu apko likhne ki zarurat nhi hai 

 //const addThree = (num1,num2,num3) => num1 +num2+num3
 const addThree =(num1,num2,num3)=> (num1+num2+num3) // curly braces me wrap kia to return keyword likhna hi pdega 
 // jb react shikenge toh yh bhot use hoga 

 console.log(addThree(3,5,7));
 
 //parenthesis {} lagane se fyda kya hota hai , suppose abhi hum num1 ,num2 return kr rhe the lekin jb object return krna ho parenthisis use krna hoga
 //const addThree =(num1,num2,num3)=> { username : "sagar"} // undefined iga kuki is trah se object return nhi kr skte 
 //const addThree =(num1,num2,num3)=> ({username : "sagar"}) // ese hi krna pdega

 const myArray =[2,3,4,5,6]

 myArray.forEach(function(){})
 myArray.forEach(()=> {})
 myArray.forEach(()=> ())
 //all are correct