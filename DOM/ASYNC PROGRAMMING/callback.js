//when a function accepts another function as a parameter

//example setTimeout,setInterval,map


//Example 1
function greet(name){
    document.body.append(`Hello ${name},Welcome`);
}

function compute(fname,lname,callback){
    const fullname=`${fname} ${lname}`;
    callback(fullname);
}

compute("john","doe",greet);




