//debouncing is useful while performing search operation
//we can avoid unneccessary api call using this technique.


Debouncing
 difference between two key stroke event is greater than or equal to 3000ms then trigger an event.
Throttling
 difference between two functioncall is 3000ms no matter what the event is.

//IN REACT JS

 
import { useState, useCallback } from "react";

export default function App() {
  const[search,setSearch] = useState("")
  function debouncing(func) {
    let timer;
    return (...args) => {
     
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(this, args);
      }, 1000);
    };
  }

// without using call,apply,bind

function debouncing(func) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func(...args); // Directly invoke the function with arguments
    }, 1000);
  };
}

const searchHandler = useCallback((e) => {
  console.log("api call");
  setSearch(e.target.value);
}, []);

const searchFn = useMemo(() => debouncing(searchHandler), [searchHandler]);

  return (
    <div className="App">
      <input type="text" onChange={(e) => searchFn(e)} />
      <p>{search}</p>
    </div>
  );
}



//method 2

useEffect(()=>{
 
 const identifier = setTimeout(()=>{
  console.log('Checking form validity')
  setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length>6)
 },500);
 
 return ()=>{
  console.log('cleanup')
  clearTimeout(identifier)
 }
 
},[enteredEmail,enteredPassword])
