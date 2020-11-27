// Defining a constructor function
function Student (first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

// Setting prototype
Student.prototype = Object.create(Person.prototype);

// Modifying constructor reference
Object.defineProperty(Student.prototype, 'constructor', {
  value: Student,
  enumerable: false,
  writable: true
});

// Overriding methods
Student.prototype.greeting = function () {
  alert(`Yo! I'm ${this.name.first}.`);
};
