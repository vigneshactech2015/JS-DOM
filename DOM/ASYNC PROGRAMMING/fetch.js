//fetch always returns a promise

let rest=fetch('https://restcountries.com/v3/all')
              .then((data)=>{return data.json()}).then((v1)=>console.log(v1)).catch((error)=>console.log(error));

console.log(rest);
