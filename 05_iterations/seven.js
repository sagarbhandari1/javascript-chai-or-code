const myNumbers =[1,2,3,4,5,6,7,8,9,10]

//sb n umbers me 10 add krna hai
//callback function hai or easy hai 
//const newNums= myNumbers.map((num) => num +10)

//console.log(newNums);

//chaining method(jb hum 2-3 method directly use krre use channing bolte hai )
const newNums = myNumbers
         .map((num)=> num *10)
         .map((num)=> num +1)//phle wale method me jo bi kux banega vo is second wale me pass ho jaiga (num*10 ..mtlb number 10 se multiply ho k isme inge )
        .filter((num)=>num>=40)

        console.log(newNums);
        
