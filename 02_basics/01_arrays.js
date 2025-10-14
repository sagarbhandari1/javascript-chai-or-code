//arrays in java are resizeable
//array in javascript make shallow copies ..... jo bi me change krunga vo orignal array me bi change hoga
//deep copy properties do not share same refrence

const myArr = [0,1,2,3,4,5,]

const myHeros=["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4) // another way of declaring array
console.log(myArr[0]);

// array methods
myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop //isme kux argument pass nhi krne hote ...vo last value hi nikalta hai 
``
console.log(myArr);

myArr.unshift(9)// yha to sirf 6 value thi ...lekin 10,000 hoti to kafi time consuming hota or computer pr bi load pdta

console.log(myArr);

myArr.shift() // use to remove from first ,no need to pass arguments

console.log(myArr);

//some more operation 

console.log(myArr.includes(9));//yh questionare hai jo array se puxra hai ki usme 9 included hai ya nhi..result will be boolean 

 console.log(myArr.indexOf(4));

 const newArr = myArr.join() //adds all the element of an array into the string 

 console.log(myArr);
 console.log(newArr);//values to same hi ingi change jo hoga vo hai type

 console.log(typeof newArr);
 

 //slice,splice
console.log(`slice and splice`);

 console.log("A ",myArr);// phle array print kia

 const myn1 = myArr.slice(1,3)//first se start kriye ,second ko include kriye pr third ni hoga

 console.log(myn1);
 console.log("B ",myArr); //jo orignal array hai isko bi print kriye

 console.log(`now splice`);

 const myn2 = myArr.splice(1,3)
 console.log(`C ${myArr}`);
 console.log(myn2);
 

 //slice me last range include nhi hui hai lekin splice me ho gyi hai pr yh answer nhi hai 
 // splice me vo pura array hi change ho jata hai ya manipulate ho jate .... splice krte waqt jo values humne di hai splice unko array se hi bhar nikal dega 
 
 
 
 
 
 
 











