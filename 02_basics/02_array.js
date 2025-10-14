const marvel_heros = [ "thor","ironman","spiderman"]
const dc_heros = ["superman", "flash","batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);//array koi bi data le leta hai vo khud dusre array ko as a data le lega

//console.log(marvel_heros[3][1]);//hume 3rd value k array ki 1 st value access ki 

//when we use concat
console.log(`using concat`);

const allHeros = marvel_heros.concat(dc_heros)

 console.log(allHeros);
 //concat se or easy method hai
  
 const all_new_heros = [...marvel_heros,...dc_heros]//jese hi dot dot dot lagaya toh vo array nhi rgha uske elements individual ho gye hai 

 console.log(`using spread ${all_new_heros} `);

 const another_array = [1, 2 , 3 , [ 4 , 5 , 6 ] , 7 , [ 6 , 7 , [ 4 , 5 ]]]

 const real_another_array = another_array.flat(Infinity)// flat se yh hoga ki array k andar jo array hai vo hat jainge or ek array me ajainge ... 
  //infinty limit deni to nhi chiye ...jese upr 3 array hai toh unko hatane k liye limit 3 deni chiye 

  console.log(real_another_array);

  //this might use when i am data scrapping 
//sometimes when we select the data it comes in different format like nodelist,objects,ya string but chiye to array 

//to hum puch bi skte hai ki vo array hai ya ni or convert bi kr skte hai agr nhi ho toh

console.log(Array.isArray("Sagar"));

console.log(Array.from("Sagar"));//is se array bnjata hai 

console.log(Array.from({name:sagar}));// it will give an empty array kuki vo "name:sagar"ko directly convert nhi kr para****************************INTRESTING CASE 
//hume bolna padega ki keys ka array bnau ya values ka array bnau 

let score1 = 100 
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));//returns new element from set of elements (kuxbi ho skte hai,variables ya arrays)



  
 
 

