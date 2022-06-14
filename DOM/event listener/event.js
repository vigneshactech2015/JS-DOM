
var b=document.createElement('button');
b.innerHTML="Click Me";
b.addEventListener('click',click);
document.body.append(b);

function click(){
    var div=document.createElement('div');
    div.innerHTML="this is div";
    div.style.fontSize="32px";
    document.body.append(div);
}