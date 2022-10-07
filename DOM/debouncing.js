//HTML
<input type="text" onkeyup="betterFunction()">
  
 //JS
  
let counter=0;
const getData=()=>{
  //api call
 console.log("fetching data",counter++) 
}

const doSomeMagic=function(fn,delay){
 let timer;
  return function(){
    clearTimeout(timer);
    timer=setTimeout(()=>{
    fn.apply(this,arguments)
    },delay)
  }
}

let betterFunction=doSomeMagic(getData,3000)
