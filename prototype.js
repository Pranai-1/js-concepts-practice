function Person(name) {
    this.name = name;
}
//person is a function which is also a object because it is created using new leyword interally.so it has a prototype property
    //console.log(Person.prototype)//this will have access to all the default methods that are existing 
    //console.log(Person.prototype.toString())//[object Object] it has given some output but not a error because of method in parent
    //console.log(Person.prototype.prototype)//we get undefined because Object is the top of heirarchy and it has no prototype

  const person1 = new Person("Alice");
  const person2 = new Person("Bob");

//Adding methods or properties using a prototype for all objects using Person function

    Person.prototype.greet=function(){
        console.log(`Hello ${this.name}`)
        return `Hello ${this.name}`
    }
    Person.prototype.age=23
    // console.log(Person.__proto__)//Toget the prototype,not recommended method
    // console.log(Object.getPrototypeOf(Person))//recommended
    //   Person.prototype.greetArrow=()=>{
     //     console.log(`Hello ${this.name}`)//it will not work because "this" here points to global object because of arrow function
    //   }//we get undefined in name

    //delete Person.prototype.greet//deleting
    // console.log(person1.greet())
    // console.log(person2.greet())

    // In JavaScript, the prototype property is typically associated with constructor functions, not instances created by those 
    // constructor functions.To get prototype using instances,we get access using constructor property which itself refers to the
    //  constructor function.example below
   //console.log(person1.constructor.prototype)//{ greet: [Function (anonymous)] }

   person1.constructor.prototype.run=function(){ //This is same as Person.prototype
    return `running ${this.name}`
   }
    // console.log(person1.run())
    //  console.log(person2.run())

    person1.age=16//modifying prototype properties
    // console.log(person1.age)//16
    // console.log(person2.age)//23

//Declaring methods for all Objects in parent object
    Object.prototype.set=function(){
        return `Everything is set ${this.name}`
    }
    let obj={
        name:"pranai"
    }
    let x=10

    // console.log(obj.set())//Everything is set pranai
    // console.log(person1.set())//Everything is set Alice
    // console.log(x.set())//Everything is set undefined
//using prototype for primitives
   let y=100
    x.constructor.prototype.divide=function(){
        return this.valueOf() / 2
    }
    x.constructor.prototype.getThis=function(){
        return this
    }
    // console.log(x.getThis())//[Number: 10]//auto-boxing
    // console.log(y.getThis())//[Number: 100]
    // console.log(x.divide())//5
    // console.log(y.divide())//50

//assigning prototypes
        const User1 = {
            name: "chai",
            email: "chai@google.com"
        }

        const Teacher = {
            makeVideo: true
        }

        const TeachingSupport = {
            isAvailable: false
        }

        const TASupport = {
            makeAssignment: 'JS assignment',
            fullTime: true,
            __proto__: TeachingSupport
        }

        Teacher.__proto__ = User1 //assigning the prototype of teacher to user object check in chrome
        //not visible in nodejs

        // modern syntax
        Object.setPrototypeOf(TeachingSupport, Teacher)
        console.log(Teacher)
        console.log(TASupport)
        console.log(TeachingSupport)