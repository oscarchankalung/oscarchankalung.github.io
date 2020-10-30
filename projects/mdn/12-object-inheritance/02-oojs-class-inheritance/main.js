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

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting();
snape.subject = 'Ballon animals';
snape.greeting();

let chan = new Student('Oscar', 'Chan', 25, 'male', ['JavaScript']);
chan.greeting();