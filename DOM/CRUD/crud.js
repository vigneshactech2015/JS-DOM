var url='https://62a8afe9943591102ba8079d.mockapi.io/users';

//read operations

async function getdata(){
   
    var get=await fetch(url);
    var res=await get.json();
    console.log(res);
    res.map((res1)=>{
    document.getElementById('name').innerHTML=`<h5>${res1.name}</h5>
    <h5>${res1.email}</h5>`
})}

getdata();

//create operations

function createdata(){
let data={
    name:"john doe",
    email:"john@vignesh.in"
};
fetch(url,{
    method:"POST",
    //convert to string based notation
    body:JSON.stringify(data),
    headers:{
        "Content-type":"application/json;charset=UTF-8",
    },
}).then((data)=>data.json()).then((res)=>console.log(res));
}



//update operations

function updatedata(){
    let data={
        name:"john",
        email:"jo@vignesh.in"
    };
    fetch(url+'/1',{
        method:"PUT",
        //convert to string based notation
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json;charset=UTF-8",
        },
    }).then((data)=>data.json()).then((res)=>console.log(res)).catch((error)=>console.log(error));
    }
    

    //delete operations

    function deletedata(){
      
        fetch(url+'/1',{
            method:"DELETE"
        }).then((data)=>data.json()).then((res)=>console.log(res)).catch((error)=>console.log(error));
        }
        



