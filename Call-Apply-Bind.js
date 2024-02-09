let greet={
    sayHello:function(age){
        console.log(`${this.name} ${age} Hello`)
    }
}

let obj={
    name:"pranai",
    age:23
}
let obj1={
    name:"john"
}
// greet.sayHello.call(obj1,23)//john 23 Hello

//This is wrong way to declare function inside objects
// let greet1={
//     name:"joe",
//     sayBye:()=>{
//         console.log(`${this.name} bye`)
//     }
// }
// greet1.sayBye()//This wont work
//In your code, the sayBye function is defined using an arrow function expression (() => {}). Arrow functions have a 
// lexical this binding, meaning that this inside an arrow function refers to the value of this in the surrounding lexical context. 
// In this case, the surrounding lexical context is the global scope, because arrow functions do not have their own this context.

function SetUsername(username){
    this.username=username
    console.log(`called ${this.username}`)
}
function User(username,age){
    this.age=age;
    SetUsername.call(this,username)//we are invoking the setusername function with the specified context
    //if we dont pass the reference this inside setusername refers to global object
    console.log(this)// 'this' refers to the instance of User
}

//let user1=new User("pranai",23)
//console.log(user1)

//Apply with same example

function SetUsername1(username){
    this.username=username
    console.log(`called ${this.username}`)
}
function User1(username,age){
    this.age=age;
    SetUsername1.apply(this,[username])//only difference
    console.log(this)// 'this' refers to the instance of User
    //O/P:-User1 { age: 23, username: 'pranai' }
}

//    / let user2=new User1("pranai",23)
//console.log(user2)


//Bind check bind.js
//bind returns a function

let multiply = function(x, y) { 
return x * y;
};

let multiplyBy2 = multiply.bind(this, 2);
//console.log(multiplyBy2)//[Function: bound multiply]
//console.log(multiplyBy2(3)); // Outputs: 6

// multiply.bind(this, 2): This part creates a new function that is a copy of the multiply function, 
// with its this value set to the first argument (this) and the first parameter (x) set to 2. 
// This means that whenever this new function is called, it will always have its this value set to the global object 
// (or undefined in strict mode), and the first parameter will always be 2.
// multiply2=function(x,y){//multiply2 will be something like this
//     return 2*y
// }

//Polyfill is nothing but support to older browsers which doesn’t have new methods. 
//It is like writing custom bind functionality

//what does bind do:-
//1.It takes arguments,first argument is the context reference and foloowed by next arguments
//2.It returns a function
//3.Bind is accessible for all functions

//so,we need to create a custom method in Function.prototype

//This will only take 1 argument at every function call
Function.prototype.polyfillForMultiply=function(x){
    let fnc=this
    return function(y){
     return fnc.call(this,x,y)
    }
}

let multiply3=multiply.polyfillForMultiply(3)
let multi2=multiply.polyfillForMultiply(2)
// console.log(multiply3(4))//12
// console.log(multi2(4))//8

//more arguments
//printing the details of obj object

//using bind
function getDetails(city,area){
    console.log(`Details are ${this.name} ${this.age} ${city} ${area}`)
}

let fnx=getDetails.bind(obj,"hyderabad")//passing obj as reference,the second argument here becomes the first parameter
 //fnx()//Details are pranai 23 hyderabad undefined
// fnx("moosapet")//Details are pranai 23 hyderabad moosapet ,the first argument becomes third parameter

 //Acheiving this functionality with function.prototype

 Function.prototype.polyfillForDetails=function(...args){//multiple arguments
    let fnc=this
    let objRef=args[0]//first argument contains the reference in which it should be executed
    let sliced=args.slice(1)
    return function(...par){
     return fnc.apply(objRef,[...sliced,...par])//multiple parameters
    }
}

let polfnc=getDetails.bind(obj,"hyderabad")
polfnc("moosapet")//Details are pranai 23 hyderabad moosapet
let polfnc1=getDetails.bind(obj,"hyderabad","grp")
polfnc1()//Details are pranai 23 hyderabad grp

let polfnc2=getDetails.bind(obj)
polfnc2("hyderabad","grp")//Details are pranai 23 hyderabad grp