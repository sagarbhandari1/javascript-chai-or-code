//objects ko declare krne k do tarike hai ek hai litreals ek hai constructor
//jb hum constructor se bnate hai to singleton bngta hai mtlb ki yh apni trh ka ek hi object hai 
//lekin jb hum dusre tarike se bnate hai toh vo singleton nhi hota us k multiple instances bn jate hai


//object.create this is constructor method

//interview me puxa jata hai ki ek symbol lo usko object ki keys me lo or mujhe print kr k dikado
const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

// object 



const jsUser ={
    name : "sagar" ,//name jo humne define kia system usse string ki trh process krta hai pr humari marzi hai hum boolean,sring,integer, kuxbi de
    "full name": "sagar bhandari",
    mySym :"mykey1" ,//yh work nhi karega value to show krdega mgr dataype m string karega blki symbol show krna chiye
    [mySym2] : "mykey1",//yh correct syntax hai symbol ko object k andar use krne ka
    age : 23 ,
    location : "jaipur" ,
    email: "bhandarisagar@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["monday", "saturday"]


}
//how to access objects
console.log(jsUser.email);// yh sahi tarika nhi hai ... yh nhi kh ra ki yh glt hai is k alawa bi hai

console.log(jsUser["email"]);

//console.log(jsUser.full name); hum ise access hi nhi kr skte kuki spaces allowed nhi hai 
console.log(jsUser["full name"]);


console.log(jsUser.mySym);
console.log(typeof jsUser.mySym);
console.log(jsUser[mySym2]);


//basic batte of objects

//objects ki values ko dot notation se access krte hai  jsUser.name
 
//values ko change kese krte hai
jsUser.email = "manav@abc.com"

//values ko lock/freeze bi kr skte hai agr hum chate hai ki usse koi change na kre 
//Object.freeze(jsUser) //object ko hi freeze krna pdta hai 

jsUser.email = "vainhav@abc.com"

console.log(jsUser);

//how to add fumctions in javascript

jsUser.greeting = function () {
     console.log("hello js user ");
         
}
jsUser.greetingTwo = function(){
     console.log(`Hello JS User, ${this.name}`);//jb same object k andar ki value ho to this use krte hai
     
}


console.log(jsUser.greeting());//agr hum sirf greeting dete without brackets to value ati function returnback ..function execute nhi hota sirf uska refrence iya hai
console.log(jsUser.greetingTwo())









