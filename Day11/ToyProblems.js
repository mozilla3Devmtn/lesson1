create a class for Person
set two properties

create a Person prototype (method) called displayData 
prints object data

Student
set two additional properties
inherits from the Person class

create a student
call displayData method to show properties of the object as well as the inherited properties from parents

student.displayData()


var Person = function(living, happy){
	this.living : living; //True-False
	this.happy : happy; //True-False
	this.displayData = function(){
		console.log(this.Person());
	}
}

Person.prototype.Student(this.Person){}

Var Student = (){
	this.gradeNum : gradeNum; //int 1-12
	this.subject : subject; //string
}

Bens answer

var Person = function(){
	this.property1 = true;
	this.property2 = false;
} 

Person.prototype.displayData = function(){
	console.log(this);
}

var Student = function(a, b){
	Person.call(this, a, b);
	this.newProperty1 = true;
	this.newProperty2 = false;
}

Student.prototype = Object.create(Person.prototype);

var student = new Student();
student.displayData();

add a reverse string method to the Student prototype

Student.prototype.reverse = functon(string){
	string.split('').reverse().
}

String.prototype.reverse = function(){
	return this.split('').reverse().join('');
}


var arr = [1, 2, 3];
arr.forEach(function(item){
	console.log(item;)
})

