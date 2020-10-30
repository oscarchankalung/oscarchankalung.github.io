const input = document.querySelector('input');
const btn = document.querySelector('button');
const para = document.querySelector('p');

btn.onclick = function() {
  const code = input.value;
  para.textContent = eval(code);
}

console.log('calling prototype');
console.log(Person.prototype);
console.log(Teacher.prototype);
console.log(Student.prototype);

console.log('calling prototype.constructor');
console.log(Person.prototype.constructor);
console.log(Teacher.prototype.constructor);
console.log(Student.prototype.constructor);

console.log('calling prototype.greeting');
console.log(Person.prototype.greeting);
console.log(Teacher.prototype.greeting);
console.log(Student.prototype.greeting);

let person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);
let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
let student1 = new Student('Oscar', 'Chan', 25, 'male', ['JavaScript']);

person1.greeting();
teacher1.greeting();
student1.greeting();