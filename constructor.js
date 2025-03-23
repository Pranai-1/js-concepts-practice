function User(name,age){
   this.name=name;
   this.age=age;
    this.check=function voteCheck(){
    return this.age>=18
   } 
}

const obj1=new User("pranai",23)
console.log(obj1.check())
const obj2=new User("kid",6)
// console.log(obj1)//User { name: 'pranai', age: 23, check: [Function: voteCheck] }
// console.log(obj1.check())
//  console.log(obj1.constructor)//[Function: User]

 let obj={
    name:"pranai"
 }

 let str="pranai"
let x=10
let y=20;
Object.prototype.divide=function(){
    console.log("present")
}
//  console.log(obj.constructor)
//  console.log(str.constructor)
//  console.log(x.constructor)
 console.log(x.divide())//present
//Adding properties to a  function constructor
 function Person(name) {
    this.name = name;
   }
  
 // person1.greet ="hi"  //same as person1[‘greet]=”hi”
  const person2 = new Person("Bob");
  console.log(person2)// Person { name: 'Bob' }
 // console.log(person1); // Person { name: 'Alice', greet: 'hi' }
  //delete person1.greet//deleting the property to person1 object
 // console.log(person1);// Person { name: 'Alice' }
  var name="reddy"
  var age=23

  class parent{
   constructor(name,age){//constructor should be declared like this 
      this.name=name;
      this.age=age;
   }
   getDetails(){
      return `Hey i am ${this.name} and i am ${this.age} years old`//if we dont use this we get reddy as name
   }
  }
  const instance=new parent("pranai",23)
 console.log(instance.getDetails())

//  class ButtonHandler {
//    constructor() {
//        this.button = document.getElementById("classEventHandler");
//        this.button.addEventListener('click', this.handleClick.bind(this));//no need of explicit binding if handleCLick is an arrow function
//    }

//    handleClick() {
//        console.log("Button clicked!");
//        // You can add more functionality here
//    }
// }

// // Instantiate the ButtonHandler class
// const buttonHandler = new ButtonHandler();