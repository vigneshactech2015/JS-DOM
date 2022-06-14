
var division=document.createElement('div');
division.innerHTML="<span class='main'>this is div</span>";
division.setAttribute('class','nameoftheclass');
division.style.backgroundColor="red";
document.body.append(division);

//retrieving from index.html
var retrieve=document.getElementById('retrieve');
console.log(retrieve);