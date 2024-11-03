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
    setTimeout(()=>{  console.log("waited for 1 ms")},1)//4th eventhough it is 1ms
    console.log("completed wait")//2nd
}
function noWait(){
    console.log("inside noWait")//3rd
    
}
wait()
noWait()
//This means that after wait() function synchronous operations are finished it will be removed from the stack\

// function a(){
//     console.log(b.y)
//     function b(){
//         let y=100
//     }
// }

// a()

async function x(){
    console.log("before")
    let ans=await new Promise((resolve)=>resolve(0))
    console.log("Helloo")//This is will gets printed after inside y 
    console.log("after"+ ans)
   
}

 function y(){
    console.log("inside y")
}

x()
y()



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