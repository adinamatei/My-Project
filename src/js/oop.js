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