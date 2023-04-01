//promise is an object which will accept function as a parameter.
//Inside the function we have two parameters-resolve and reject
//promise has 3 states-pending(initial state),rejected,fullfilled
//promise is an object that represents an eventual completion/failue of async operations

//example 1
let p=new Promise((resolve,reject)=>{
    if(true){
    resolve("your ops is successfull");}
    else{
        reject("your ops is failed");
    }
});
console.log(p);

//example 2

var age=parseInt(prompt("Enter the age of a person"));

let a=new Promise((resolve,reject)=>{

    if(age>=18){
        resolve("you are eligible to vote");
    }
    else{
        reject("you are not eligible to vote");
    }
})
a.then((data)=>{console.log(data);}
).catch((error)=>{console.log(error)});


//example 3 promise inside the function

function foo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(['john','doe']),1000);
    })
}
console.log(foo());

//example 4

const p1=new Promise((resolve,reject)=>{
    resolve("this is resolved");
    reject("this is rejected");
});
p1.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

//example 5 add operation

var count=1;

var sum=new Promise((resolve,reject)=>{
    count=count+1;
    if(count===2)resolve(count);
    else reject(count);
});
sum.then((data)=>{
    console.log(data);
    return data+5;
}).then((value)=>console.log(value)).catch((error)=>{
    console.log(error);
});

//example 6

function fooz(num){
    return new Promise((resolve,reject)=>{
        resolve(2*num);
    })
}

fooz(12).then((v1)=>{
    console.log(v1);
    return fooz(v1);
}).then((v2)=>{
    console.log(v2);
    return fooz(v2);
}).then((v3)=>{
    console.log(v3);
}).catch((error)=>{
    console.log(error);
})

//drawback of promise

//usage of multiple .then and .catch
//to overcome .then we use async await

