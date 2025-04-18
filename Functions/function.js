//Function Expression
const square = function(number){
  return number*number;
}
const x=square(4);
console.log(x);

//Arrow Function
// Syntax: let function_name=(argument 1, argument 2, ...)=>a*b
let myFunction=(a,b)=>a*b;

//Return Function
let x = myFunction(4, 3);
function myFunction(a, b) {
  return a * b;
}

//Local Variables
// code here can NOT use carName
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}
// code here can NOT use carName


