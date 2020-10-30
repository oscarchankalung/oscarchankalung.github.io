// Defining a constructor function
function Teacher(first, last, age, gender, interests, subject)  {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

// Setting prototype
Teacher.prototype = Object.create(Person.prototype);

// Modifying constructor reference
Object.defineProperty(Teacher.prototype, 'constructor', { 
  value: Teacher, 
  enumerable: false,
  writable: true
});

// Overriding methods
Teacher.prototype.greeting = function() {
  let prefix;

  if (this.gender === 'male' || this.gender === 'm') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'f') {
    prefix = 'Ms.';
  } else {
    prefix = 'Mx.';
  }

  alert(`Hello. My name is ${prefix} ${this.name.last}, and I teach ${this.subject}.`);
};
