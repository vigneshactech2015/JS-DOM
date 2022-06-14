//creating bootstrap table

var table=document.createElement('table');
table.setAttribute('class','table');

//creating thead
var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');

//creating trow
var tr=document.createElement('tr');

//create a th tag
var th1=createthtd('th','firstname');
var th2=createthtd('th','lastname');
tr.append(th1,th2);
thead.append(tr);

//creating tbody
var tbody=document.createElement('tbody');
var tr1=document.createElement('tr');

var td1=createthtd('td','guvi');
var td2=createthtd('td','geek');

tr1.append(td1,td2);

var tr2=document.createElement('tr');

var td1=createthtd('td','vignesh');
var td2=createthtd('td','V');

tr2.append(td1,td2);

tbody.append(tr1,tr2);
table.append(thead,tbody);
document.body.append(table);

function createthtd(elementname,value){
var td=document.createElement(elementname);
td.innerHTML=value;
return td;
}


