console.log(2>1);


console.log( "2" > 1);


console.log("02" > 1);
//when comparing make sure everyone has same datatype

console.log(null > 0); // comparison convert null to a number,treating it as 0 
console.log(null == 0);
console.log(null >= 0);// thats why first is false and third is true

//the reason is that an equality check == and comparisons >,<,>=,<= works differently


console.log(undefined ==0);
console.log(undefined > 0);
console.log(undefined < 0);// avoid these conversion ... they can put this in confusion

//=== this will check datatype also 

console.log("2" === 2);




