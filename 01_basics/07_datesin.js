//dates

let myDate =new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString())

console.log(typeof myDate);// date ka type object hota hai 

let myCreatedDate = new Date(2023, 0 , 23)//months 0 se start hote hai lekin jb hum MM-DD-YYYY format me likhte hai toh 1 se hote hai
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());


//timestamps ... jb quizzes design krte hai ya fastest polls.. ya hotel booking time pr dates ko compare krna pdta hai 

let myTimeStamp = Date.now()
console.log(myTimeStamp); 
console.log(myCreatedDate.getTime());

console.log(Date.now()/1000);//date ko milliseconds me change kr dia
//ab point k bad wali values na mille toh hum floor use kr rhe hai 

console.log(Math.floor(Date.now()/1000));


//some methods that we get using date
 let newDate = new Date() 
 console.log(newDate);
 console.log(newDate.getDay());
 console.log(newDate.getFullYear());

 newDate.toLocaleString('default',
    {
        weekday: "long",
        
    }
 )

 
 
 












