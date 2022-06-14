fetch('https://restcountries.com/v2/all').then((value)=>{
    return value.json();
}).then((data1)=>{
    var cc=data1[0].name;
    console.log(cc);
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=52d7b20a839c702ce0f2642122503c7d`)
}).then((val1)=>{
    return val1.json();
}).then((val2)=>{
    console.log(val2.main.temp);
});

//using async await

/*
let cc;
let resturl='https://restcountries.com/v2/all';
async function foo(){
    let rescont=await fetch(resturl);
    let rescontdata=await rescont.json();
    cc=rescontdata[0].name;
    let openweath=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=52d7b20a839c702ce0f2642122503c7d`);
    let openweathdata=await openweath.json();
    console.log(openweathdata.main.temp);
}
foo();
*/