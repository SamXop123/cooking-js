
//! PROGRAM TO CALCULATE FACTORIAL IN DIFFERENT WAYS!

//? Method-1 

let n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i;
}
console.log(fact)

// --------------------------------------------

//? Method-2

let a = 6

function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=>{ 
    return a*b 
    });
   console.log(c)
}
factorial(a)
