//Block:- Block is a group of multiple statements inorder to use it in a place where js expects a single statement
//if(true){we can write multiple statements here}
if(true)true

//Block Scope:- Blockscope means what are all the variables and functions that can be accessed inside this block

// if you declare a variable with let outside any block or function, it will have a scope limited to the script or module in which it is 
// declared (not global).

var c=100
let a=10;
{
    
     let a=5;      
    const b=10;  //here a and b are hoisted and placed in a block scoped memory but c is placed in global scope memory
    var c=20;//var is function scoped so we can access it outside of this block as it is present in global scope in this case
    console.log(a)
    console.log(b)
    console.log(c)
}// we cannot access let and const outside of this block as these are block scoped but we can access var 

// console.log(b)///we get reference error as b is not defined
console.log(c)// we get 20 as output as both of the variable c is present in same scope,the later shadows the first one
console.log(a)//we get 10 as the output because both the variable a is in different scope,one is block scope and the other in script


let x=10
let z=10;
var y=10
{
    //console.log(z)//ReferenceError: Cannot access 'x' before initialization
    let z=100//Illegal shadowing
//var x=10//This is SyntaxError: Identifier 'x' has already been declared,because var has function scope sp this x is now part of 
//global scope where as above x is present in script scope,both points to same memory location so we cannot do this.
//this is illegal shadowing
//we cannot re-declare let  in same scope of memory
let y=100//This is valid because y is not present in the same scope
}


//Lexical Scoping
let s=100
{
let s=50;
{
    let s=25
    console.log(s)
}
console.log(s)
}
console.log(s)
//s have different scopes 
//first s is present in script scope
//second s is present in block scope and third s also in block scope but in a different block



// Creating a symbol with an optional description
const mySymbol = Symbol('This is a symbol');

// Symbols are guaranteed to be unique
const anotherSymbol = Symbol('This is a symbol');

console.log(mySymbol === anotherSymbol); // Outputs: false (symbols are unique)

// Symbols can be used as property keys
const obj = {
  [mySymbol]: 'Symbol as a property key'
};

console.log(obj); // Outputs: {Symbol(This is a symbol): 'Symbol as a property key'}

const obj1={
    key1:10
}

const key2='hey'
const obj2={
    [key2]:10
}
console.log(obj1)
console.log(obj2)