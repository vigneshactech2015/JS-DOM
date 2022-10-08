//debouncing is useful while performing search operation
//we can avoid unneccessary api call using this technique.


Debouncing
 difference between two key stroke event is greater than or equal to 3000ms then trigger an event.
Throttling
 difference between two functioncall is 3000ms no matter what the event is.


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
