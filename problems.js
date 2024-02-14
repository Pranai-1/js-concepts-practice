//sum(1)(2)(3)(4)....()=?
//This function will return a final output whenever there is an empty parameter 
//This function will return another function if there are any parameters

let sum=function(a){
    return function(b){
        if(b)
        return sum(a+b)
       return a
    }
}

console.log(sum(1)(2)(3)(4)(5)())

// let obj = {
//     foo: "pranai",
//     fnc: function () {
//         var self = this;//self points to obj
//        // console.log(this)//this points to obj
//         console.log(this.foo); // Outputs: "pranai"
//         console.log(self.foo); // Outputs: "pranai"
//         (function () {
//            // console.log(this)//this points to global object
//             //console.log(self)//self points to obj
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

let obj4 = {
    foo: "pranai",
    fnc:  ()=> {
        var self = this;//self points to global
        console.log(this)//this points to global
        console.log(this.foo); // Outputs: undefined
        console.log(self.foo); // Outputs: undefined
        ( function() {//arrow function takes surrounding context which is the context of fnxc
            console.log(this)//this points to global object
            console.log(self)//self points to global
            console.log(this.foo); // Outputs: undefined
            console.log(self.foo); // Outputs: undefined
        })()  
    }
}
obj4.fnc();
