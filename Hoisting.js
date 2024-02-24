//console.log(y)//will get reference error Cannot access 'y' before initialization and execution stops here itself
//console.log(v) //will get reference error Cannot access 'v' is not defined
sayHi()
console.log(sayHi)
console.log(x)//gets undefined
//fnc()//if we declare fnc with var and try to call here,we get TypeError as fnc is not a function
//if we declare fnc with let and try to call here,then we get a reference error as Cannot access 'fnc' before initialization
var x=10;
let y=20;
function sayHi(){
    setTimeout(()=>{
       console.log("Inside setTimeout")
    },5000)
    console.log("hi")
}

var fnc=()=>{
    console.log("inside arrow function")
}
fnc()

var q=5;
var q=10//This is possible with var

let s=1
//let s=10//will get syntax error as s has already been declared

// const b  //SyntaxError: Missing initializer in const declaration
// b=100

const b=100
// b=10  //TypeError: Assignment to constant variable.

const greet = function namedGreet() {
    console.log("Hello!");
  };

  //namedGreet(); //Uncaught ReferenceError: namedGreet is not defined
  greet()

  const arrow=()=>(
    
    console.log("arrow")
  )
  const arrow1=()=>{
    let obj={
        name:"pranai",
        age:23
    }
    console.log({...obj})//destructuring
  }
  arrow()
  arrow1()