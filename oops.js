//Dont look at this without reading Prototype and __proto__.txt file

//Example of Abstraction
function Student()
{
	this.Name="Name";
	throw new Error("You cannot create an instance of Abstract Class");
}
Student.prototype.print=function()
{
	return "Student is: "+this.Name;
}
function KG(Name)
{
	this.Name=Name;
}

// Create a new object with Student.prototype as its prototype
const kgPrototype = Object.create(Student.prototype);

//KG.__proto__=kgPrototype//we are directly assigning the object of student.prototype to constructor function kg itself
//The instances of kg cannot access the print method
let x2={
     name:"pranai",
    hey:function(){console.log(this.name)}//if we use arrow function here it will not check for name in x2 but in the obj
}
    var obj=new KG("Vivek");
    obj.prototype=x2
    console.log(obj.prototype.hey())
    //  console.log(KG.print());//Student is: undefined
    // console.log(obj.print())//error
//To avoidd this we need to set the  prototype of instances of the KG class to the kgPrototype object.
    KG.prototype=kgPrototype
    let obj1=new KG("Vivek");
    //console.log(obj1.print())//Student is: Vivek

//Encapsulation
  class Person{
    constructor(age){
        this.age=age
    }
    canVote=()=>{
        return this.age>=18;//this is needed
    }
    canMarry=function(){
        return this.age>21//this is needed
    }
    canDance(){
        return this.age>3
    }
  }
  let p1=new Person(26)
//   console.log(p1.canVote())
//   console.log(p1.canMarry())

 //same code using functions

    function Person1(age){
    this.age=age
    this.canVote=function(){//this is needed
            return this.age>=18;
        }
        this.canMarry=()=>{//this is needed
            return age>21//no need of this
        }
    }
    let x=new Person1(25)
    // console.log(x.canVote())
    // console.log(x.canMarry())

//Inheritence
 
        class User {
            constructor(username){
                this.username = username
            }

            logMe(){
                console.log(`USERNAME is ${this.username}`);
            }
        }

        class Teacher extends User{
            constructor(username, email, password){
                super(username)
                this.email = email
                this.password = password
            }

            addCourse(){
                console.log(`A new course was added by ${this.username}`);
            }
        }

        const chai = new Teacher("chai", "chai@teacher.com", "123")

    //    / chai.logMe()
        const masalaChai = new User("masalaChai")

        //masalaChai.logMe()

        // console.log(chai instanceof User);