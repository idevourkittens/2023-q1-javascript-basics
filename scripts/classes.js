class People {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		let fullName = `${this.firstName} ${this.lastName}`;
		return fullName;
	}
}

class Student extends People {
	constructor(firstName, lastName, grade) {
		super(firstName, lastName);
		this.grade = grade;
	}
}

let p1 = new People("Jack", "Black");
let s1 = new Student("Peter", "Griffin", 20);

p1.firstName = "Joe";
p1.lastName = "Mama";

console.log(p1.getFullName());
console.log(s1.getFullName());
