 const coding =["js","java","phyton","ruby","cpp"]

 const values = coding.forEach((item)=>{
    console.log(item);
    return item
 })

 console.log(values);
 //values print hogai pr usne return kuxni kra ,agr kux return krna hai to usse manually krna pdega
 //manually krne k bad pta chlega ki yh koi value return nhi krta 

 //humesa esa todi hota hai ki kux values humne array se li or hum usse print hi krana chate ho ya kux use hi krna chata hu 
 //ho skta hai ki kux or kam krnaa chata hu ....temporaray condition dena chata hu (ya koi or operations krna chata hu )  jese agr uska naam java hai to return kriye  vrna mat kriye 
 //toh is cases k liye 

 const myNums = [1,2,3,4,5,6,7,8,9,10]
//filter bi apne andar call back hi lega 
//filter values return krta hai 
 const newNums = myNums.filter((num)=> num>4)
 console.log(newNums);
 
 const newNums2 = myNums.filter((num)=> {
    num >4
 })
 //when we write in {} we have to use return keyword
console.log(newNums2);

//how to return using foreach
const newNums3 =[]
myNums.forEach((num)=>{
    if (num>4) {
        newNums3.push(num)
    }
})
console.log(`return using foreach ${newNums3}`);


 