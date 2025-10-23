const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}
//abhi tk for of  loop object pr kam nhi krra tha
//is k liyr hum for in use krenge 
//esa nhi hai i forin loop humesa objects k liyee hota hai  or bi jga kaam ata hai

for (const key in myObject) {
   // console.log(key);
    console.log(myObject[key]);
    console.log(`${key} for shortcut is ${myObject[key]}`);
    
    
    
    
    
}
//array me forin lgare

const programming =[ "js","java","phython","r"]

for (const key in programming) {
    //console.log(key);
    //yha pr sirf keys ing ..blki for of me sidha values ajati hai 
    //array me keys by default number se start hoti hai or number hi hoti hai
    //object me hum keys khud define kr skte hai 
    console.log(programming[key]);
    
    
    
    
}


//map me forin lagare

const map = new Map()
map.set('IN',"India")
map.set('US',"Unites States Of America")
map.set('Sa',"South Africa")
map.set('In',"India")

for (const key in map) {
   console.log(key);
   
    
    
}
//kux show nhi hoga kuki map iteratable nhi hai 
