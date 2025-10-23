//reduce method 
//yh bhot jga use ata hai especially jb hum shopping cart use krte hai
const myNums =[1,2,3]

//const myTotal = myNums.reduce(function (acc,currval) {
 //   console.log(`acc : ${acc} and currentvalue ${currval}`);
    
 //   return acc + currval
// },3)
//accumulator ko comma k bad jo bi vale do vo lega

const myTotal =myNums.reduce( (acc,curr) => acc +curr,0)
console.log(myTotal);

const shoppingCart =
[
    {
        itemName:"js course",
        price : 2999,
    },,
    {
        itemName:"py course",
        price : 999,
    },
    {
        itemName:"mobile dev course",
        price : 5999,
    },
    {
        itemName:"data science course",
        price : 12999
    }
]

//to add all price
const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price , 0)
console.log(priceToPay);
