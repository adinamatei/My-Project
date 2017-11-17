// Employee constructor
function Employee (firstName, secondName, age, gender) {
    // public fields created whit 'this' keyword
    this.firstName = firstName;
    this.secondName = secondName;

    //private fields created with var
    var privateAge = age;
    var privateGender = gender;
    var name;
    var feature;

    // public function available outside the constructor function
    function fullName(){
        name = firstName + " " + secondName;
        return name;
    };


    //private function available inside the constructor function
    var getPrivateInfo = function(){
        feature  = "Name: " + fullName() + ", Age: " + privateAge + ", Gender: " + privateGender;
        return feature;
    };

    //privileged function can access private properties
    this.getInfo = function(){
        return getPrivateInfo();
    };

}
// public function created using .prototype
Employee.prototype.getPublicInfo = function () {
    return this.getInfo();
};

// created new instance of Employee
var employee = new Employee("John", "Something", 27, "male");
console.log(employee.getPublicInfo());
var employee2 = new Employee("Maria", "Youknow", 24, "female");
console.log(employee2.getPublicInfo());


//****************************************************************

// Encapsulation and Inheritance
//defined the Student constructor
function Student(firstName, secondName, email){
    // initialize the instance properties
    this.firstName = firstName;
    this.secondName = secondName;
    this.email = email;
    this.grades = [];
}

//overwriting the prototype property with an object literal
// and define all methods inside
// methods will be inherited by all the Student instances
Student.prototype = {
    constructor: Student,
    name: function(){
        return this.firstName + " " + this.secondName;
    },
    getGrades: function(grade, credits){
        var calcOfGrades = grade * credits;
        this.grades.push(calcOfGrades);
    },
    showTheGrades: function(){
        return this.grades.join(",");
    },
    changeEmail: function(newEmail){
        this.email = newEmail;
    },
    getMail: function(){
        return "The new Email: " + this.email;
    }
};

//Created instances of the Student function
var firstStudent = new Student("John", "Brown", "john@gmail.com");
firstStudent.getMail(10, 5);
firstStudent.changeEmail("john123@gmail.com");
firstStudent.getMail();
firstStudent.getGrades(9, 4);
console.log("Name: " + firstStudent.name() + ", Grades: " + firstStudent.showTheGrades() + ", Email: " + firstStudent.getMail());

var secondStudent = new Student("Tom", "Patterson", "tomprince@mail.com");
secondStudent.getGrades(9, 5);
secondStudent.getGrades(7, 4);
console.log("Name: " + secondStudent.name() + ", Grades: " + secondStudent.showTheGrades());


//Polymorphism
var Animal = function() {};
Animal.prototype.says = function() {
    return "I am an animal";
};

var Dog = function() {};
Dog.prototype = Object.create(Animal.prototype);
// Overriding Animal's says function
Dog.prototype.says = function() {
    return "I am a dog";
};

var Cat = function() {};
Cat.prototype = Object.create(Animal.prototype);
// Overriding Animal's says function
Cat.prototype.says = function() {
    return "I am a cat";
};

var Horse = function() {};
Horse.prototype = Object.create(Animal.prototype);

var animal = [new Animal(), new Dog(), new Cat(), new Horse() ];

var allAnimals = function (animal) {
    for (var i = 0; i < animal.length; i++) {
        console.log(animal[i].says());
    }
};
console.log(allAnimals(animal));



//Classes and Inheritance in ES6
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return "Hello, my name is " + this.name + " and I have " +
            this.age + " years old.";
    }
}
class Adult extends Person{
    constructor(name, age, occupation) {
        super(name, age);
        this.ocupation = occupation;
    }
    getInfo() {
        return super.getInfo() + "I am a " + this.ocupation;
    }
}

class Child extends Person {
    constructor(name, age) {
        super(name, age);
    }
    getInfo() {
        return super.getInfo() + " I am a student!"
    }
}

const person1 = new Adult("Adina", 30, "web developer" );
console.log(person1.name);
console.log(person1.getInfo());
const person2 = new Child("Maria", 12);
console.log(person2.getInfo());

