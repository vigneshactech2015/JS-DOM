String.prototype.myMethod = function(){
  return this.toUpperCase()
}

console.log("vignesh".myMethod())

//All js objects derive its method and properties from prototype
//using a prototype we can create new methods to the datatypes

Example : 

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};

const p1 = new Person("Alice");

p1.sayHello(); // Hello, I'm Alice

In this example:

p1 doesn’t have a sayHello method.

But its prototype (Person.prototype) does.

So JavaScript finds it up the prototype chain.

Prototype chain :
p1 --> Person.prototype --> Object.prototype --> null
