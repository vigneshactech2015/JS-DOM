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
  let context=this,
      args=arguments;
    clearTimeout(timer);
    timer=setTimeout(()=>{
    fn.apply(context,args)
    },delay)
  }
}

let betterFunction=doSomeMagic(getData,3000)
