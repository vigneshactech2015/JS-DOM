//CAB where we can use one object method to another object
let obj1={
  firstname:"vignesh",
  lastname:"v",
  displayfullName:function (state){
   console.log(`${this.firstname} ${this.lastname} state:${state}`)
  }
}

let obj2={
  firstname:"vignesh",
  lastname:"vijayakumar"
}

obj1.displayfullName.call(obj2,"TamilNadu")
//apply accepts array of arguments
obj1.displayfullName.apply(obj2,["TamilNadu"])
//bind-->not invoked immediately -->saved for future use
obj1.displayfullName.bind(obj2,"TamilNadu")
