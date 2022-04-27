//Create an object called Teacher derived from the Person class, and
//implement a method called teach which receives a string called subject, and
//prints out: [teacher's name] is now teaching [subject]

function Person() {}

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
};

// TODO: create the class Teacher and a method teach

function Teacher() {}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
    this.subject = subject;
    return `${this.name} is now teaching ${this.subject}`;
};

let him = new Teacher();
him.initialize("Adam", 45);
console.log(him.teach("Inheritance"));
