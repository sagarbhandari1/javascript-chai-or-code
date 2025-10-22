//truthy value and falsey value ..kux value hoti hai jinhe assume kr lia jata hai ki yh sahi hi hogi  ya fir yh glt hi hogi 

const userEmail = "h@email.com"
//yha koi comparision nhi kia gya hai bus ek string ko man lia gya hai ki vo string true value hai  or empty string ko false man lia gya hai ...empty array ko true man lia jaiga
 if (userEmail){
    console.log("have usere email");
    
 }
 else
 {
    console.log("didnt get email");
    
 }
 //falsy values - false , 0,-0,BigInt0n , null, undefined , NAN
 //truthy values - "0"(string k andar kuxbi value ho jai  is truth falue ) , 'false', " " , { },[ ], function(){} //empty function bi ek truth value hai 

 //array ko check krne ka trika 
  const user = []
   if (user.length===0) 
    console.log("array is empty ");
    {
    
   }
   //objects empty ajai toh 
   const emptyObject ={}

   if (Object.keys(emptyObject).length===0 ) {
    console.log("object is empty ");
    
   }

   //Nullish Coalescing Operator (??) //sari khani null aur undefined k upr tiki rhti hai

   let val1;
   val1 = 5 ?? 10
   //khi bar jb hum database se call krte hai ya especially firebase wagera inka use krenge  ya appright ka use krenge toh directly response nhi milta hume 2 values milti hai  ho skta hai null response ajai ya response udefined ajai ...us cases k liye yh bnaya hai 
   //ki values ko apko treat krna hai ki acha null ho toh us hisab se case ko treat krlu ,undefined hai to thik hai vrna koi value ari hai toh vo assign krdu 


   console.log(val1);
   console.log(val1);

   let val2;
   val2= null ?? 10 // uslaay yha 10 nhi hota yha  function lga dete hai ki data base se value ari ho  agr value i toh thik vrna null assign krdo taki me us hisab se handle krlu 
   //null coalescing operator yh kam krta hai ki agr null value i hai to uska safety check krta hai kuki null k basis pr ho skta hai kux program run na krre  ya kux aage ja k problem ho jai

   console.log(val2);

   let val3;
   val3 = undefined ?? 15
   console.log(val3);

   let val4 
   val4 = null ?? 25 ?? 40 //yha jo phli value hai vo hi assign ho jaigi 

   console.log(val4);
   
   
   // ternary operator 

   //condition ? true :false

   const iceTeaPrice =100
   iceTeaPrice >= 80 ? console.log("greater than 80 "): console.log("less than 80");
   ;
   
   
   

