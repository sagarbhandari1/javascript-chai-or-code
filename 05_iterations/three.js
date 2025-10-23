//yh sare loops array specific loop hai 
//for of 
// array me string kese dale ["","","","",]
//array me object kese dale[{},{},{},{}]

const arr = [ 1,2,3,4,5,6,7,8,9,10]
//iterator of object se pareshan nhi hona hai iska mtlb yh nhi hai ki yh object k liye hi kaam ata hai , loop loop hai  objects bi iterator hai array bi itterator hai hum unpr loop lga skte hai ,string bi iteraqtor hai us pr bi  
//yh jo object hai vo java script ka object nhi hai iska mtlb hai kis chij pr aap loop lagana chate hai
/*for (const element of object) {
    
}*/
//yh apne app pta kr lega kb loop end ho rha hai , us values ki size kya hai ,,humko kuxni krna hume sirf variable declare krna hai or btana hai kis pr loop lagana hai , koi declaration, increment nhi krna koi decrement ni krna
for (const num of arr) {
    console.log(num);
    
}
const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

//maps in javascripts
//array jese hi hote hai pr iteration wagera hota hai
//map object hai jo ki hold krat hai key value pairs ,orignal insertion ka order  yad rkta hai 

const map = new Map()
map.set('IN',"India")
map.set('US',"Unites States Of America")
map.set('Sa',"South Africa")
map.set('In',"India")//dublicate values nhi leaga

console.log(map);

for (const key of map) {
    console.log(key);
    
}//yh toh purra array agya or mujhe alg alg values chiye thi

for (const [key,value] of map) {
    console.log(key, `:-`,value);
    
}//this is a syntax

// but agr object hota toh me uspr for loop lga skta tha ky 

const myObject = {
    'game1':'nfs',
    'game2':'gta',
    'game3':'cards'
}

for (const [key,value] of myObject) {
    //console.log(key ,`:`,value);
    
}//this will give error ki object iteratable nhi hai ,,objects ko itterate krane k dusre tarike hai 