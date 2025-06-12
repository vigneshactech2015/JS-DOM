1)The Temporal Dead Zone (TDZ) in JavaScript refers to the time between entering
a block scope and the actual declaration of a variable declared using let or const,
during which accessing the variable will result in a ReferenceError.

2)When a variable is declared with let or const, it is hoisted to the top of its block scope, but not initialized.
The variable is in a "dead zone" from the start of the block until the declaration line is executed.

Example :
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10;

console.log(b); // ✅ undefined
var b = 20; //var is hoisted and initialized as undefined, so it doesn’t have a TDZ.

