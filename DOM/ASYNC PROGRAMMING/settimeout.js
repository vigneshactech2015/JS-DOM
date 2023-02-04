//setTimeout -->  example of async operation

let count=1
let greeting = setInterval(()=>{
  console.log(count)  
  count++
  if(count>5){
clearInterval(greeting)
}
},1000)



