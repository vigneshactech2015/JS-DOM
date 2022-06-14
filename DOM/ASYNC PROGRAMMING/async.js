//async always returns a promise

//example 1

async function foo(){
    let data=await "hi";
    //await keyword can be used inside async function only
    console.log(data);
}
foo();

//example 2

function foo1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("hello"),3000);
    })
}

function foo2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("buddy"),5000);
    })
}

async function compute(){
    var res=await foo1();
    var res1=await foo2();
    console.log(res);
    console.log(res1);
}

compute();

//example 3

/*function fetch(){
    return fetch('/')
}

function foo3(){
    return fetch('https://restcountries.com/v2/all');
}

async function compute(){
    var res3=await foo3();
    var res4=await fetch();
    console.log(res3);
    console.log(res4);
}

fetch();*/

//example 4

function a(){
    return new Promise((resolve,reject)=>setTimeout(()=>reject("Hello you are rejected.."),3000));
}

function fo(){
    return new Promise((resolve, reject) => setTimeout(()=>resolve("Hello Vicky"),1000));
}

async function c(){

    try{
    var ress=await fo();
    var ress1=await a();
    console.log(ress);
    console.log(ress1);
}catch(error){
        console.log(error);
    }
}

c();