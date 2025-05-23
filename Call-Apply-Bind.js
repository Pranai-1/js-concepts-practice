let greet={
    sayHello:function(age){
        console.log(`${this.name} ${age} Hello`)
    }
}

let obj={
    name:"pranai",
    age:23,
    city:"mumbai"
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
    console.log(this)//User { age: 23 }
    this.username=username
    console.log(`called ${this.username}`)
}
function User(username,age){
    this.age=age;
    SetUsername.call(this,username)//we are invoking the setusername function with the specified context
    //if we dont pass the reference, this inside setusername refers to global object or something else based on strict mode
    console.log(this)// 'this' refers to the instance of User
}

let user1=new User("pranai",23)
console.log(user1)

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
    console.log(this)
return x * y;
};

let multiplyBy2 = multiply.bind(this, 2);//This is an example of function currying as well
// console.log(multiplyBy2)//[Function: bound multiply]
// console.log(multiplyBy2(3)); // Outputs: 6

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
//1.It takes arguments,first argument is the context reference and followed by next arguments
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
    console.log(`Details are ${this.name} ${this.age} ${city} ${area}`)//observe that there is no this for the variables that is 
    //received as arguments
}

let fnx=getDetails.bind(obj,"hyderabad")//passing obj as reference,the second argument here becomes the first parameter
 //fnx()//Details are pranai 23 hyderabad undefined
// fnx("moosapet")//Details are pranai 23 hyderabad moosapet ,the first argument becomes third parameter

 //Acheiving this functionality with function.prototype

Function.prototype.CustomGetDetails=function(...args){
    let fnc=this
    let context=args[0]
    console.log(context)
    console.log(fnc)
    let arr=args.slice(1)
    return function(...args){
        let array=[...arr,args]
        return fnc.call(context,...array)
    }
}


console.log("hello")
let polyfill=getDetails.CustomGetDetails(obj,"hyderabad")
console.log(polyfill("moosapet"))



















//  Function.prototype.polyfillForDetails=function(...args){//multiple arguments
//     let fnc=this
//     let objRef=args[0]//first argument contains the reference in which it should be executed
//     console.log(objRef===fnc)
//     let sliced=args.slice(1)
//     return function(...par){
//      return fnc.apply(objRef,[...sliced,...par])//multiple parameters
//     }
// }

// let polfnc=getDetails.bind(obj,"hyderabad")
// polfnc("moosapet")//Details are pranai 23 hyderabad moosapet
// let polfnc1=getDetails.bind(obj,"hyderabad","grp")
// polfnc1()//Details are pranai 23 hyderabad grp

// let polfnc2=getDetails.bind(obj)
// polfnc2("hyderabad","grp")//Details are pranai 23 hyderabad grp



Function.prototype.polyfillForBind=function(...args){//has to be regular function
   let context=args[0];
   let functionToCall=this
   let params=args.slice(1)
   return new function(...args1){
       params=[...params,...args1]
     return functionToCall.call(context,...params)
   }
}





Function.prototype.polyFillForCall=function(...args){
   const context=args[0];
   let params=args.slice(1)
   const uniqueKey = Symbol(); // Symbol to avoid naming conflicts
   context[uniqueKey] = this; // Temporarily assign `this` (the function) to `context`
 
   const result = context[uniqueKey](...params); // Call the function with `context` as `this`
   delete context[uniqueKey]; // Clean up the temporary property
 
   return result; // Return the result of the function call
}

let x1=[1,2,3,4,5]

x1.map((ele,index,arre)=>{console.log(arre)
    return ele*2
})//here arre is nothing but the original array x1,both points to same memmory,it will be chnages throughout the iteration.once 
//iteration completes it will create a new array.

x1.reduce((acc,curr)=>{acc+=curr
    return acc
},0)

Object.prototype.customMap=function(...args){
    let callBackFunc=args[0]
    let array=this
    if(typeof callBackFunc!=='function' || !array || array.length==0)
        return

    let newArr=[]
    for(let i=0;i<array.length;i++){
       newArr.push(callBackFunc(array[i],i,array))
    }
    return newArr
}



Object.prototype.customReduce=function(...args){
    let callBackFunc=args[0]
    let array=this
    let intialValue, start

    if(typeof callBackFunc!=='function' || !array || array.length==0)
        return

    if(!args[1]){
        intialValue=array[0]
        start=1
    }else{
        intialValue=args[1]
        start=0
    }
   
 
    let newArr=[]
    for(let i=start;i<array.length;i++){
       intialValue=callBackFunc(intialValue,array[i],i,array)
    }
    return intialValue
}