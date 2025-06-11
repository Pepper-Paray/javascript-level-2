// Object Creation
let person = {
  name: 'Alice',
  age: 25,
  isStudent: true
};

// Access Properties (dot notation)
let personName = person.name;
let personAge = person.age;

// Modify Properties (dot notation)
person.age = 26;
person.isStudent = false;

// Access Properties (bracket notation)
let nameProp = person['name'];
let ageProp = person['age'];

// Modify Properties (bracket notation)
person['name'] = 'Bob';
person['isStudent'] = true;

// Dynamic Property Access
let prop = 'age';
let dynamicValue = person[prop]; // Accesses person['age']
person[prop] = 30; // Modifies person['age']
