//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	get getName{
		return this.name;
	}
	set setAge(age){
		this.age = age;
	}
}

class Student extends Person {
	constructor(){
		super(name,age);
	}
	study(name){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(){
		super(name,age);
	}
teach(name){
	console.log(`${this.name} is teaching`);
}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
