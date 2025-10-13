let score = 23

//req.body // jb hum frontend se koi value le
console.log(typeof score);
console.log(typeof (score));


let marks ="23 abc"
 
console.log(typeof marks);

let valueInNumber = Number(marks)
console.log(typeof valueInNumber);
console.log(valueInNumber);
// jub humne 23abc lia toh yh string tha ,jo number me toh convert ho gya ...pr hona nhi chiye kuki string tha ...tbhi usne output NAN dia mtln NOT A NUMBEER
// NAN ek special type hai jo ki hum check kr skte hai ki value ne yh toh nhi dia.... just life if condition 

//for null value
let sagar = null
console.log(typeof sagar);

let valueInSagar = Number(sagar)
console.log(typeof valueInSagar);
console.log(valueInSagar);

//null ka value isne zero dia jo ki ek number hai... for ex agr humne temperature maga or server ki wajah se nhi aa pra toh use null values deni chiye na ki zero


//for undefined value

let manav = undefined
console.log(typeof manav);

let valueInManav = Number(manav)
console.log(typeof valueInManav);
console.log(valueInManav);

// wapis se undefined ka output nan iya hai 

//for boolean value

let chimmu = true
console.log(typeof chimmu);

let valueInChimmu = Number(chimmu)
console.log(typeof valueInChimmu);
console.log(valueInChimmu);

//for string jo numer me convert nhi ho skta

let name = "vaibhav"
console.log(typeof name);

let valueInName = Number(name)
console.log(typeof valueInName);
console.log(valueInName);

//"23" = 23
//"23abc" NAN
//"true"= 1
//"false"= 0

//further more conversion 

let isLoggedIn = 1
//ab hum is boolean me convert kr re 

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

//1= true; 0= false
// for empty string
//"" = false
//for name
//"sagar"= true 

//converting things into string 

let someNumber = 33
 let stringNumber = String(someNumber)

 console.log(stringNumber);
 console.log(typeof stringNumber);
 
 








