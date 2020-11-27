function Person (first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender.toLowerCase();
  this.interests = interests.map(item => item.toLowerCase());
};

Person.prototype.bio = function () {
  let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';

  if (this.gender === 'male' || this.gender === 'm') {
    string += 'He likes ';
  } else if (this.gender === 'female' || this.gender === 'f') {
    string += 'She likes ';
  } else {
    string += 'They likes ';
  }

  if (this.interests.length === 1) {
    string += this.interests[0] + '.';
  } else if (this.interests.length === 2) {
    string += this.interests[0] + ' and ' + this.interests[1] + '.';
  } else {
    for (let i = 0; i < this.interests.length; i++) {
      if (i < this.interests.length - 1) {
        string += this.interests[i] + ', ';
      } else {
        string += 'and ' + this.interests[i] + '.';
      }
    }
  }
  alert(string);
};

Person.prototype.greeting = function () {
  alert('Hi! I\'m ' + this.name.first + '.');
};

// The prototype property
const person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

console.log('calling person1.toString()');
console.log(person1.toString());
console.log('calling person1.valueOf() return person1');
console.log(person1.valueOf());
console.log('calling Object.getPrototypeOf(person1) return Person');
console.log(Object.getPrototypeOf(person1));
console.log('calling Object.getPrototypeOf(Object.getPrototypeOf(person1)) return Object');
console.log(Object.getPrototypeOf(Object.getPrototypeOf(person1)));

console.log('calling Person.prototype');
console.log(Person.prototype);
console.log('calling Object.prototype');
console.log(Object.prototype);

// The constructor property
const person2 = Object.create(person1);
const person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);

console.log('calling person1.constructor');
console.log(person1.constructor);
console.log('calling person2.constructor');
console.log(person2.constructor);
console.log('calling person3.name.first');
console.log(person3.name.first);
console.log('calling person1.constructor.name');
console.log(person1.constructor.name);
console.log('calling person1 instanceof Person');
console.log(person1 instanceof Person);

// Modifying prototypes
Person.prototype.farewell = function () {
  alert(this.name.first + ' has left the building. Bye for now!');
};
person1.bio();
person1.greeting();
person1.farewell();
