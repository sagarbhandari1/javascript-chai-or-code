//datatypes are categories in two parts on how they are strored and how they are accesed
//primitive (they are call by value ,jb bi hum inhe khin se khi copy krte hai  inka orignal data ka refrence of memory nhi dia jata  ,mtlb isko copy kr k dia jata hai alg  ,or jo bhi changes hum krte hai vo copy me changes hote hai )

//7 types : string ,number ,boolean ,null, undefined ,symbol ,BigInt


//is javascript dynamically type language ya statically type language ?? 
//when we have to tell the type of variable (type se saftey bd jati hai , pr javascript ,me iska koi use nhi )

// javascript is a dynamically typed language .this means type checking ,or the process of veryfying the data types of variables ,is performed at runtime rather than during compilation 

const score = 100
console.log(typeof score);

const scoreValue = 100.3
console.log(typeof scoreValue);





const isLoggedIn = false //boolean
console.log(typeof isLoggedIn);


const outsideTemp = null //null
console.log(typeof outsideTemp);


let userEmail ; //undefined also be written as let userEmail = undefined
console.log(typeof userEmail);


const id = Symbol('123')
const anotherId = Symbol('123')
 
console.log(id === anotherId );//false halaki values humne same di hai  lekin jo return value hume mila vo same ni hai 

console.log(typeof id);




const bigNumber = 345678905434354533400n

console.log("non primitive");


// non-primitive (refrence type )

//array,objects,functions 

const heros = [ "shaktiman", "nagraj", "doga"];

let myObj = {
    name : "sagar",
    age : 23 ,
}
 console.log(typeof heros);
 console.log(typeof myObj);
 
 

const myFunction = function(){
    console.log("hello world");
    
};//yha humne function ko variable me store kra dia  
console.log(typeof myFunction);//function ,function hi return karega pr bola jaiga function  object


//how to know the datatype 
console.log(typeof bigNumber)

 



//javascripts master krni hai to objects master kr lijiye or web events ya browser events kr lijiye  