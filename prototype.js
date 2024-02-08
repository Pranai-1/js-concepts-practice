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
  }
//   Person.prototype.greetArrow=()=>{
//     console.log(`Hello ${this.name}`)//it will not work because "this" here points to global object because of arrow function
//   }//we get undefined in name
    console.log(person1.greet())
    console.log(person2.greet())


let obj={
    name:"pranai"
}
console.log(obj.greet())
