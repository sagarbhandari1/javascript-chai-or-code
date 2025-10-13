const name = "hitesh"
const repoCount = 50

console.log( name + repoCount + "value");//dont use this type of syntax , morden day me koi ise use ni krta

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);//yha pr string interpolation ..isme hum place holders bnate hai unke andar hum jo bi variable inject krna chai kr skte hai
 
// another ay of naming string

const gameName = new String('sagarrbhandari-sb-ysb')//here we are using objects of javascript ... 
console.log(gameName);// yha jo gamename iga vo key and values me iga jese 0:s,1:a,2:g.... iska plus point yh hai ki isme hume length properties milti hai plus or bi methods milte hai jo protype k andar hai 
// in method ko master krna hi string k bare me pdahi krne ka focus rhega 

console.log(gameName[4]);
console.log(gameName.__proto__);

//some example of string objects/methods are
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

const newString =gameName.substring(0,5)//last me jo value dali hai vo include nahi hogi ..yha pr hum negative value nhi de skte vo ignore kr dega
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

//const anotherString2 = gameName.slice(5,2)
//console.log(anotherString2);

const newStringOne = "    sagar   "
console.log(newStringOne);
console.log(newStringOne.trim());//use to trim spaces ...white spaces and line terminators pr hi kam krta hai 

const url = "https://hitesh.com/hitesh%20choudhary" //browser spaces nhi smjta to browser use apne app %20 pr convert kr deta hai 

//methods to remove or replace 


console.log(url.replace('%20','-'));

//hum is se question bi pux skte hai

console.log(url.includes('hitesh'));

console.log(url.includes('sagar'));
// ab me chata hu ki string me jo dash hai alag part me split ho jai (based on kuc bi ho skta hai jese dash,spaces)

console.log(gameName.split('-'));












