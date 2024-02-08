function User(name,age){
   this.name=name;
   this.age=age;
    this.check=function voteCheck(){
    return age>=18
   } 
}

const obj1=new User("pranai",23)
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
 //console.log(x.divide())

 function Person(name) {
    this.name = name;}
  
  const person1 = new Person("Alice");
  person1.greet ="hi"  //same as person1[‘greet]=”hi”
  const person2 = new Person("Bob");
  console.log(person2)// Person { name: 'Bob' }
  console.log(person1); // Person { name: 'Alice', greet: 'hi' }
  delete person1.greet//deleting the property to person1 object
  console.log(person1);// Person { name: 'Alice' }
  