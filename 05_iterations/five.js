//intresting loop jo hum kaafi use krenge 

//foreach loop
 const coding =["js","java","phyton","ruby","cpp"]
//kux loops array k andar direct hi properties me add kr diye jate hai 
//yh toda higher order function hai 
//yh functions hai inko bhot idea hai yh apne app jante hai ki kitta bda array hai kitti uski length hai 
//function name(params) {} //jo call back functions hote hai us k andar uska naam nhi hota 
//humari mrzi hai hum use item bole a bole i bole value bol le
coding.forEach( function (items) {
console.log(items);

    
} )
 
//iska ek or varient 
//upr toh basic tha kis trh se hum load kr skte hai  values likh skte hai 
//zaruri nhi hum function isi trh likhe 
//arrow function likh skte hai 
console.log(`another way`);

coding.forEach((items)=>{
    console.log(items);
    
})
console.log(`making more intresting `);

function printme(items) {
    console.log(items);
    
}
coding.forEach(printme)//yha sirf refrence dena hai usko printme() kr k execute nhi krna 


coding.forEach((items,index,arr)=>{
    console.log(items,index,arr);
    
})

const myCoding =[
   
     {
        languageName :"javascript",
        languageFile :"js"
    },
 {
        languageName :"java",
        languageFile :"java"
    },
     {
        languageName :"python",
        languageFile :"py"
    },
]
//db se value ati hai vo obj k form me ati hai or hr ek value ek obj hi hota hjai

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})
