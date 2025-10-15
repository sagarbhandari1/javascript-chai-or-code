//objects ko singleton kese kr skte hai ya constructor ki help se kese declare kr skte hai

const tinderUser = new Object()
//const tinderUser={} ese bi declare kr skte hai  bus dirrence yh hai ki yh ek non singleton obj hai 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

//ab objects k andar objects denge

const regularUser = {
    email: "some@gmail.com",
    fullname :{
             userfullName :{
              firstname :"sagar",
              lastname  :"bhandari",
}
    }//fullname ko object declare krdia 
}

console.log(regularUser.fullname);

//how to combine objects 

const obj1 ={ 1:"a",2:"b"}
const obj2 ={ 3:"c",4:"d"}
const obj5= {5:"e",6:"f"}

const obj3 ={ obj1,obj2} //voi array wali problrm igi ek k andar ek
console.log(obj3);

const obj4 = Object.assign(obj1,obj2,obj5)//iska ek or syntax hai ..isme kya hora hai ki sari values obj1 me jari hai
console.log(obj4);


const obj6 = Object.assign({},obj1,obj2,obj5) //yh optional parameter hota hai lekin dena chiye value ek ho k ati hai ....yh bi hum kum hi use krenge
console.log(obj6);

const obj7 = {...obj1,...obj2,...obj5} //spread operator ka use
console.log(obj7);

//jb database se ingi

const users =[
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:2,
        email:"h@gmail.com",
    },
    {
        id:3,
        email:"h@gmail.com",
    },
]//vaues array k form me ingi ... toh array k andar bhot sare objects honge 

users[1].email //to access user values 
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // object ki sari values ek array me bn k agai an hum is pr kuxbi kr skte hai
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));// array k andar array milega ..har ek key value ko array me bna dia 

//khi bar kya hoga ki objects k andar pura loop loopthrough krre hai or loop krne k bad ek value nikal re hai ..toh value nikalte time vo value exist hi ni krti ...
// or value exist na ho toh crash hone k chances hai ..toh hum us se pux skte hai ki kya aap pr yh value hai

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//destructuring of objects

const course = {
    coursename: "js in hindi ",
    price:"999",
    courseInstructor : "hitesh"
}

//jub hum values use krenge toh usme hum course.courseinstructor kr k use krenge
//suppose yh value hume 3 bar print krni hai to hum 3 bar nhi likenge 

const {courseInstructor :instructor} = course /// yha mujhe lga yh course instructor lmba naam hai toh mne ise instructor hi bna dia isi ko bolte hai ki object ko destructured kese kr skte hsi

console.log(Instructor);

//API ka concept jb bi apna kam kisi k sir dal dena hai use api khte hai 

//api me humare pass kux values ati hai backend se ..un values ko hum kese likthe hai
//phle values xml structure me ati thi ,ab vo values json  me ati hai
//json(javascript object notation) esa dikta hai
//{
 //  " name" :"sagar",
//    "coursename" : "js in hindi"
//    "price": "free"
//}

//kai bar api array k format me bi milti hai to us array k andar kafi objects hote hai 
[
    {},
    {},
    {}
]











