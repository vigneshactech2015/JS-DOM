var result=document.querySelector('#main1').innerHTML="this is updated p";
console.log(result);

function count(){
var count=document.getElementById('text').value;
var number=count.length;
console.log(number);}


//we can update data in queryselector and not in getelementbyid and class
//queryselectorall returns all the elements and queryselector returns only first element