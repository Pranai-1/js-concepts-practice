// shallowcopy:-A shallow copy is a copy of an object that duplicates only the top-level structure of the object, 
// while the nested references are shared between the original object and the shallow copy. In other words, a 
// shallow copy creates a new object, but it does not create new copies of nested objects 
// or arrays contained within the original object. Instead, it simply copies references to those nested objects or arrays.
const mySym=Symbol("age")
let obj={
    name:"pranai",
    address:{ //this will be pointing to same memory point after a shallow copy
        home:"hyderabad"
    },
    [mySym]:23//passing symbol as a key,it must be in square brackets
}
//In JavaScript, enumerable properties are properties of an object that can be iterated over using a loop,
// The Object.keys, Object.values, and Object.entries methods only return the enumerable properties of an object.
//  By default, symbols are non-enumerable, which means they won't appear in the result when using these methods.

// However, you can use Object.getOwnPropertySymbols to get an array of all symbol properties of an object, regardless 
// of their enumerability.
console.log(Object.keys(obj));//[ 'name', 'address' ]
console.log(Object.values(obj));//[ 'pranai', { home: 'hyderabad' } ]
console.log(Object.entries(obj));//[ [ 'name', 'pranai' ], [ 'address', { home: 'hyderabad' } ] ]
let symbolProperties = Object.getOwnPropertySymbols(obj);
console.log(symbolProperties); // Output: [Symbol(age)]
console.log(obj[symbolProperties[0]]); // Output: 23
//- `obj` is created using object literal syntax.
//    - The properties (`name` and `address`) and their values are directly defined within the curly braces `{}`.
//    - The `address` property contains another object with its own properties.
//    - When a shallow copy of `obj` is made, the `address` property will point to the same memory location as in the original 
//object, because the shallow copy only creates new references for top-level properties, not for nested objects or arrays.

let singleObj=Object.create({
    name:"pranai",
    address:{ 
        home:"hyderabad"
    }
})
console.log(singleObj)//output:-{}
//Object.create(), but those properties are not directly on singleObj. When you log singleObj to the console, you see an empty 
//object because the properties are not part of the own properties of singleObj.
//However, you can still access the properties of singleObj through prototypal inheritance. That's why you can access name and 
//address.home properties using dot notation. They are present on the prototype chain of singleObj


// /Object.create() does not create a shallow copy of an object. Instead, it creates a new object with the specified prototype 
//object and optionally additional properties.
//    - `singleObj` is created using `Object.create()`.
//    - The first argument passed to `Object.create()` is the prototype object for the new object being created.
//    - In this case, the prototype object contains properties `name` and `address` with initial values.
//    - However, `Object.create()` does not directly define properties and values like object literals. Instead, 
//    it creates a new object with the specified prototype object.
//    - 

let newObj = { ...obj }; // Create a shallow copy using object spread
newObj.name="reddy"
newObj.address.home="moosapet"
 console.log(obj)
// console.log(newObj)
let newObj1 = Object.assign({}, obj); // Create a shallow copy using Object.assign()

// console.log(newObj === obj); // Output: false (new object reference but the reference of nested objects will be same)
// console.log(newObj1 === obj); // Output: false (new object reference but the reference of nested objects will be same)
//if you directly assign let obj1=obj then we get true for obj===obj1 for object literal and object.create()



//creating a singleton object

let singletonObj = (function() {
    let instance; // Private variable to hold the single instance of the object

    function createInstance() {
        // Private methods and variables
        let name = "pranai";

        return {
            // Public method
            getName: function() {
                return name;
            }
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();//using IIFE to make a closure

// Usage if i dont use a IIFE
// let object = singletonObj();
// let obj1 = object.getInstance();
// let obj2 = object.getInstance();

//usage for IIFE
//IIFE is used to avoid the pollution caused by global scopes
let obj1 = singletonObj.getInstance();
let obj2 = singletonObj.getInstance();

console.log(obj1 === obj2); // Output: true (Both objects refer to the same instance)

console.log(obj1.getName()); // Output: "pranai"
console.log(obj2.getName()); // Output: "pranai"
