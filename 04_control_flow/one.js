//control flow ya logic flow mtlb ki pura code run nhi hona chiye mtlb agr ap login ho to tb yh code run ho ... nhi ho to yh ...

//if
if (2 ==="2") {
    console.log("executed");
    
}
// < , > <= ,>= ,==,!= ,=== ,!= 

const temperature = 41
 if (temperature < 50){
    console.log("less than 50");
    
 }
 else{
    console.log("greater than 50 ");
    
 }

 const score = 200

 if (score> 100) {
    const power = "fly"
    console.log(`user power : ${power}`);
    
    
 } else {
    
 }
 //short hand notation

 const balance = 1000
 if (balance > 500) console.log("test "); // this is implicit scope , ek line line me execute hoga tbhi semi colon hai ..multiple lines bi likh skte hai  comma lga k ... pr likhna nhi chiye

 //nesting

 if (balance < 500) {
    console.log("less than 500");
    
 } else if (balance < 750) {
    console.log("less than 750");
    
 } else if (balance < 900) {
    console.log("less than 900");
    
 }else {
    console.log("less than 1200");
    
 }
 // in real life
 
 const userLoggedIn = true
 const debitCard = true 
 const loggedInFromGoogle = false
 const loggedInFromEmail = true
 if (userLoggedIn && debitCard) {
   console.log("allow to buy cources");
   
 }

 if (loggedInFromEmail|| loggedInFromGoogle ) {
   console.log("user lgged in ");
   
 }