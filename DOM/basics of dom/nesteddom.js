var container=document.createElement('div');
container.setAttribute('class','container');

var row=document.createElement('div');
row.setAttribute('class','row');

var col=document.createElement('div');
col.setAttribute('class','col');

//parent.append(child)
row.append(col);
container.append(row);
document.body.append(container);