const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2];
console.log("SPREAD → Combined Array:", combined);

const person = { name: "Rithik", age: 21 };
const updatedPerson = { ...person, country: "India" };
console.log("SPREAD → Updated Object:", updatedPerson);