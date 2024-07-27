Event bubbling : child -> parent -> grandparent
third parameter is false

Event capturing : grandparent -> parent -> child
third parameter is true

// In React JS

export default function App() {
  const clickHandler = (e, str) => {
    console.log(`${str} clicked`);
  };

  return (
    <div className="App" onClickCapture={(e) => clickHandler(e, "grandparent")}>
      grandparent
      <div onClickCapture={(e) => clickHandler(e, "parent")}>
        parent
        <div onClickCapture={(e) => clickHandler(e, "child")}>child</div>
      </div>
    </div>
  );
}

//html

<style>
  div{
   min-height : 100px;
    min-width : 100px;
    border : 2px solid black;
    padding:30px
  }
  </style>

<div id="grandparent">
  <div id="parent">
    <div id="child>
</div>
</div>
</div>

//js

document.querySelector("#grandparent").addEventListener('click',(e)=>{
  console.log("grandparent clicked")
},true)

document.querySelector("#parent").addEventListener('click',(e)=>{
  console.log("parent clicked")
  e.stopPropagation()
},true)


