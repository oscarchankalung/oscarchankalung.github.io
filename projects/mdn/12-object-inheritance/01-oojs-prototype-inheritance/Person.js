function Person(first, last, age, gender, interests) {
  this.name = {
    'first': first,
    'last' : last
  };
  this.age = age;
  this.gender = gender.toLowerCase();
  this.interests = interests.map(item => item.toLowerCase());
};

Person.prototype.bio = function() {
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
        string += 'and ' + this.interests[i] + '.'
      }
    }
  }
  alert(string);
};

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}
