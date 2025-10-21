// Immediately Invoked Function expression (IIFE)
//mtlb jese hi function likha usse turant hi execute krana hai 
//kyu hume esa function chiye jo immediately execute ho jai
//kai bar hum esi file likte hai jisme especially database connection hai or hum chate hai ki jese hi file start ho us file k andar humara database ka connection start ho jai 
//khi bar global scope k andar kux variables declare hote hai or khi bar ho skta hai hum function k andar likh rhe hai or hum nhi chate ki us  function kndar vo global variable problem krre kuki vo to globally accessible hai
//jo bhi hum function me declare kr rhe hai vo khi bar global variable se pollute ho jata hai ..toh yh 2 main reason hote hai ki global scope se pollution nhi chiye toh hum pura ek scope bna leta hai (function me to ban hi jata hai)
//or dura ki immediatly chl jai

function chai(params) {
    console.log(`db connected`);
    
}
chai();

//same example
(function tea() {
    //nammed IIFE
    console.log(`tea connected`);
    
})();
//()() first parenthisis was for declaration and second was calling for execution
//jb interview me IIFE puxe toh sirf yh mt bolna ki jo jlli call ho jai
//bolna ki Global scope k pollution se problem hoti hai khi bar toh us global scope k varibles/declaration  k pollution ko htane k liye iffe ka use kia 
//yh jo immediately invoked function hai  yh invoke to hogya  pr ise pta nhi ki yh rokna kha hai to ise end krne k liye ; lagate hai


( (name)=> {
    //unammed iffe 
    console.log(`db connected two ${name}`);
    
})("sagar")