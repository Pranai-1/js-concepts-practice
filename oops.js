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

const kgPrototype = Object.create(Student.prototype);//This has been done inorder to avoid direct linkage between student and kg
//if i do KG.prototype=Student.prototype,both will points to the same place in the memory hence changes in one effects the other
    KG.prototype=kgPrototype
    Function.prototype.greet=function(){console.log("hello")}
    let obj1=new KG("Vivek");
    console.log(obj1.print())//Student is: Vivek
    obj1.greet()
//cannot access greet method because
//  In JavaScript, when you assign a new prototype to an object's prototype chain, it doesn't 
// automatically inherit any new properties or methods added to the prototype chain after the assignment.

// In your code, you're creating a new prototype object (kgPrototype) that inherits from Student.prototype 
// and then assigning it to KG.prototype. This means that instances created using the KG constructor will inherit properties
//  and methods from kgPrototype, which includes print().

// However, when you add a new method greet() to Function.prototype, it's not available in the prototype chain of kgPrototype, 
// and therefore, not inherited by instances created using the KG constructor.
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
    canDance(){//recommended way to write functions inside classes,this or above one is good not arrow
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