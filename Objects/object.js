let person = {
  name: "John",
  age: 22,
  isStudent: true
};
//Accessing Object Properties
console.log(person.name);
console.log(person["age"]);
//Modifying Object Values
person.age = 23;
person["name"] = "John Doe";
// Adding New Properties
person.city = "Chennai";
//Deleting Properties
delete person.isStudent;
//Looping through an Object
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
//Object with Methods
let user = {
  name: "Nila",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
user.greet(); 
