//using bind
let multiply=function(x,y){
console.log(x*y)
}

let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(3)//here 3 points to y

//using closures

let multiply=function(x){
  return function(y){
  console.log(x*y)
  }
}

let multiplyByTwo=multiply(2)
multiplyByTwo(3)

/*

Currying is helpful when you have to frequently call a function with a fixed argument. 
Considering, for example, the following function: If we want to define the function error 
, warn , and info , for every type, we have two options.
Currying provides a shorter, concise, and more readable solution

*/
