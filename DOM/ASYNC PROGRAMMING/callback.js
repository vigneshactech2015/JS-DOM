//when a function accepts another function as a arguments

const cart=["shoes","purse","phone"]

api.createOrder(cart,function (){
    api.proceedToPayment(function(){
    api.showOrderSummary(
        function(){
            api.updateWallet()
        }
        )
    })
}

//Problem with Callback is
 1.Callback hell(there will be deeply nested function aka pyramid of dom)
 2.Inversion of control(one function is completely dependent on another function)            

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




