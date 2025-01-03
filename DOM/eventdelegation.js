instead of attaching event handlers to every child element rather attach directly to parents

//html

<div>
<ul id="category">
<li id="laptops">laptops</li>
<li id="cameras">cameras</li>
<li id="shoes">shoes</li>
</ul>
</div>

//js

document.querySelector("#category").addEventListener('click',(e)=>{
    if(e.target.tagName == "LI"){
      window.location.href = "/"+e.target.id
    }
})

//pros                               cons
1.memory saving                     1.All Events are not bubbled up(Ex. Focus , blur)
2.Less code complexity              2.Stop Propogation used means delegation will not work
3.Less DOM Manipulation


// React

export default function App() {
  const onClickHandler = (e) => {
    console.log(e.target.id);
  };
  return (
    <div className="App">
      <ul id="Category" onClick={onClickHandler}>
        <li id="Laptop">Laptop</li>
        <li id="Mobile">Mobile</li>
        <li id="AC">AC</li>
      </ul>
    </div>
  );
}
