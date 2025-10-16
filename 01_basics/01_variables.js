const accountId = 14423
let accountEmail = "bhandarisagar6789@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountstate;

//accountId =2 //not allowed
console.log(accountId);
 accountEmail = "mavav.com"
 accountCity="Bengalury"
 accountPassword="212121"

 console.table([accountEmail,accountId,accountPassword,accountCity,accountstate])
 /*
prefer not to use var
because of issue in block scope and function scope
var is globally scope and let and const are block scoped
var can be updated and redeclared within its scope
var is initialized with undefined whereas let and const are not initalized
let can be updated but not redeclared
const must be initialized during declaration
const can neither be updated nor be redeclared
 */