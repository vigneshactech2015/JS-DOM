document.querySelector('div').addEventListener('mouseover',function(event){
    event.target.style.color="red";
    event.target.innerHTML="changed div";
});


function foo(){
    var data=prompt("enter the value");
    var span=document.createElement('span');
    span.innerHTML=data;
    document.body.append(span);
}

document.querySelector('p').addEventListener('mouseover',function(event){
    var p=document.createElement('p');
    p.style.color="red";
    p.innerHTML=`client x: ${event.clientX} clienty: ${event.clientY}`;
    document.body.append(p);
})

document.querySelector('#main').addEventListener('keyup',function(event){
    console.log(event.target.value.length);
})