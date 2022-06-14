 
 function foo(){
 let cc=document.getElementById('countryname').value;
 console.log(cc);
    async function foo1(){
    let data=await fetch(`https://api.covid19api.com/dayone/country/${cc}`);
    let result=await data.json();
    console.log(result);
    for(var i in result){
      document.getElementById("main").innerHTML=`<h2>Country:${cc}</h2>
      <p>Confirmed Cases:${result[i].Confirmed}<p>
      <p>Number of Deaths:${result[i].Deaths}<p>`
    }
     
    }
    foo1();
}

 
