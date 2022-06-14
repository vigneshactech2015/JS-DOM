//creating input element(date)

var pdiv=document.createElement('div');
pdiv.setAttribute('style','padding-top:20px');

var datelem=document.createElement('input');
datelem.setAttribute('type','date');
datelem.setAttribute('id','dob');
datelem.setAttribute('name','dob');

pdiv.appendChild(datelem);

//create a button element
var button=document.createElement('button');
button.innerHTML='display data';
button.setAttribute('class','btn btn-primary');
button.addEventListener('click',calculate);

pdiv.appendChild(button);



var dd=document.createElement('div');
dd.setAttribute('id','display');

function calculate(){
var input=document.getElementById('dob').value;
console.log(input);

if(Date.parse(input)){
    //new date is standard representation of date and time
var inputdate=new Date(input);
console.log(inputdate);
var currentdate=new Date();
console.log(currentdate);

var millisecondsdiff=parseInt(currentdate.getTime())-parseInt(inputdate.getTime());
console.log(`milliseconds:${millisecondsdiff}`);

var secondsdiff=mathfloor(millisecondsdiff,1000);
console.log(`seconds:${secondsdiff}`);

var minutesdiff=mathfloor(secondsdiff,60);
console.log(`minutes:${minutesdiff}`);

var hourdiff=mathfloor(minutesdiff,60);
console.log(`hour:${hourdiff}`);

var daysdiff=mathfloor(hourdiff,24);
console.log(`days:${daysdiff}`);

var monthdiff=getmonth(inputdate,currentdate);
console.log(`month:${monthdiff}`)

var yearsdiff=getyear(inputdate,currentdate);
console.log(`year: ${yearsdiff}`);

dd.innerHTML=`Given Input date is ${inputdate} <br>
Year:${yearsdiff}<br>
Month:${monthdiff}<br>
Day:${daysdiff}<br>
Hours:${hourdiff}<br>
Minutes:${minutesdiff}<br>
Seconds:${secondsdiff}<br>
Milliseconds:${millisecondsdiff}
`

}

else{
    dd.innerHTML="Invalid Date";
}

}

function mathfloor(value1,value2){
    return Math.floor(value1/value2);
}

function getyear(value1,value2){
    var date1=new Date(value1);
    var date2=new Date(value2);
    return date2.getFullYear()-date1.getFullYear();
}

function getmonth(value1,value2){
var year=getyear(value1,value2);
var month=(year*12)+(value2.getMonth()-value1.getMonth());
return month;
}

document.body.append(pdiv,dd);

