var person = function (y){
  this.year=y
}

person.prototype.calculateAge = function(){
  return 2022-this.year
}

var person1 = new person(1997)
console.log(person1.calculateAge())

//All js objects derive its method and properties from prototype
//using a prototype we can create new methods to the object
