//sum(1)(2)(3)(4)....()=?
//This function will return a final output whenever there is an empty parameter 
//This function will return another function if there are any parameters

// let sum=function(a){
//     return function(b){
//         if(b)
//         return sum(a+b)
//        return a
//     }
// }

// console.log(sum(1)(2)(3)(4)(5)())

// let obj = {
//     foo: "pranai",
//     fnc: function () {
//         var self = this;//self points to obj
//        console.log(this)//this points to obj
//         console.log(this.foo); // Outputs: "pranai"
//         console.log(self.foo); // Outputs: "pranai"
//         (function () {
//             console.log(this)//this points to global object
//             console.log(self)//self points to obj
//             console.log(this.foo); // undefined (or throws an error in strict mode)
//             console.log(self.foo); // Outputs: "pranai"
//         })()  //use .bind(this) to bind with current context
//     }
// }
// obj.fnc();

// let obj2 = {
//     foo: "pranai",
//     fnc: function () {
//         var self = this;//self points to obj
//         console.log(this)//this points to obj
//         console.log(this.foo); // Outputs: "pranai"
//         console.log(self.foo); // Outputs: "pranai"
//         ( ()=> {//arrow function takes surrounding context which is the context of fnxc
//             console.log(this)//this points to global object
//             console.log(self)//self points to obj
//             console.log(this.foo); // Outputs: "pranai"
//             console.log(self.foo); // Outputs: "pranai"
//         })()  
//     }
// }
// /obj2.fnc();

// let obj3 = {
//     foo: "pranai",
//     fnc:  ()=> {
//         var self = this;//self points to global
//         console.log(this)//this points to global
//         console.log(this.foo); // Outputs: undefined
//         console.log(self.foo); // Outputs: undefined
//         ( ()=> {//arrow function takes surrounding context which is the context of fnxc
//             console.log(this)//this points to global object
//             console.log(self)//self points to global
//             console.log(this.foo); // Outputs: undefined
//             console.log(self.foo); // Outputs: undefined
//         })()  
//     }
// }
// obj3.fnc();

// let obj4 = {
//     foo: "pranai",
//     fnc:  ()=> {
//         var self = this;//self points to global
//         console.log(this)//this points to global
//         console.log(this.foo); // Outputs: undefined
//         console.log(self.foo); // Outputs: undefined
//         ( function() {//arrow function takes surrounding context which is the context of fnxc
//             console.log(this)//this points to global object
//             console.log(self)//self points to global
//             console.log(this.foo); // Outputs: undefined
//             console.log(self.foo); // Outputs: undefined
//         })()  
//     }
// }
// obj4.fnc();
// localStorage.getItem("x")

function wait(){
    console.log("inside wait")//1st
   let x= setTimeout(()=>{  console.log("waited for 1 ms");
    return "success"//This return has no significance because x will be timer not the returned value
},1)//4th eventhough it is 1ms
console.log(x)
    console.log("completed wait")//2nd
}
function noWait(){
    console.log("inside noWait")//3rd
    
}
// wait()
// noWait()
//This means that after wait() function synchronous operations are finished it will be removed from the stack

// function a(){
//     console.log(b.y)
//     function b(){
//         let y=100
//     }
// }

// a()

async function x(){
    console.log("before")
    let ans= new Promise((resolve)=>resolve(0))//This is without await
    console.log(ans)//ans is a Promise object Promise { 0 }, not the resolved value (0).
    let ans1=await new Promise((resolve)=>setTimeout(()=>{
        resolve(20)
    },1000))
    let ans2=await new Promise(function(resolve){
        setTimeout(()=>{
        resolve(20)  //no need of return 
    },1000)
     })
    console.log("Helloo")//This is will gets printed after inside y 
    console.log("after"+ ans+ans1+ans2)
    return ans
//    /since ans is a new Promise(...) that's already resolved with 0, it technically isn’t "pending"— but because x() 
// is an async function ,it always returns a promise, and in this case that wraps your ans (which itself is a promise).
}

 function y(){
    console.log("inside y")
}

 console.log(x())
y()

//before
// Promise { <pending> }
// inside y
// Helloo
// after[object Promise]2020

// /In JavaScript, return inside an arrow function or any function just exits that function and optionally returns a value.
// In this case, you're inside a setTimeout callback.Whether or not you write return resolve(20);
//  or just resolve(20); doesn't matter to the outer Promise, because resolve(20) does its job either way.



// x()
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// .finally(()=>{console.log("Finished")})
// y()
// before
// inside y
// Helloo
// after02020
// 40
// Finished


//Observe the output with and without .then()
//if there are setTimeout() calls inside of a function then only that portion of the call will be removed from the stack and 
//remaining function will execute as it is
//if there is any await call then the function execution stops at that particular point and then returns the value
//if there is any return statement for that function


//     async function x(){
//     console.log("before")
//     let ans=setInterval(()=>{console.log("Inside timer")},1000)
//     console.log("Helloo")//This is will gets printed before inside y 
//     console.log("after"+ans)
   
// }

//  function y(){
//      clearInterval(ans)
//     console.log("inside y")
// }

// x()
// y()

// let ans
//     async function x(){
//     console.log("before")
//      ans=setInterval(()=>{console.log("Inside timer")},1000)
//     console.log("Helloo")//This is will not gets printed as interval got cleared
//     console.log("after")
   
// }

//  function y(){
//      clearInterval(ans)
//     console.log("inside y")
// }

// x()
// y()