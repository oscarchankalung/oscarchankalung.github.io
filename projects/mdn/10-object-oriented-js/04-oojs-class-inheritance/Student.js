class Student extends Person {
  // Defining a constructor function
  constructor (first, last, age, gender, interests, subject) {
    super(first, last, age, gender, interests);
    this.subject = subject;
  }

  // Overriding methods
  greeting () {
    alert(`Yo! I'm ${this.name.first}.`);
  };
}
