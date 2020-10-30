class Teacher extends Person {
  // Defining a constructor function
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    this._subject = subject;
    this.grade = grade;
  }

  // Overriding methods
  greeting() {
    let prefix;

    if (this.gender === 'male' || this.gender === 'm') {
      prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'f') {
      prefix = 'Ms.';
    } else {
      prefix = 'Mx.';
    }

    alert(`Hello. My name is ${prefix} ${this.name.last}, and I teach ${this._subject}.`);
  };

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
};