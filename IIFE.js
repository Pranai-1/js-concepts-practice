// /console.log(iife)//error

const mod = require('./moduleExports2');
console.log("Imported module:", mod);

//In a Node.js module, this, exports, and module.exports initially all point to the same object: {}.
// /When you reassign module.exports = { name: "pranai" }, you are replacing the object entirely.
// Meanwhile, this and exports still point to the original object (which is still {}).
// If you only add properties to exports or this (like this.name = "pranai";), the relationship stays intact.

console.log(this);//semicolon is mandatory here 
console.log(this==module.exports,this==exports);

// module.exports={name:"pranai"};

//Above statement doesn't change the this reference,if we want to change this we need to add properties
//to this or exports like this.name or exports.name or module.exports.name

// console.log(this,module.exports);


exports.name="reddy"

console.log(this,module.exports);

//When you don’t put a semicolon before an IIFE, JavaScript thinks the previous statement is related to the IIFE, 
// due to the way JavaScript’s automatic semicolon insertion (ASI) works.


(function iife1(){
    "use strict";
    console.log(this)
console.log("inside iife1")
})();


(function iife2(){
    
    console.log(this)
console.log("inside iife2")
})();


const obj={
    x:10,
    y:()=>{
      console.log(this)
    } 
}
obj.y()
// module.exports=obj
module.exports.name="pranai"
console.log(this,exports,module.exports)
console.log(this==module.exports)//here it is false because we have changed module.exports
//

//The iife in (function iife(){...})() is function-scoped and only available inside the IIFE block itself.
// It is not hoisted to the outer/global scope.
// The name iife is useful internally (e.g., for recursion), but you can’t access it outside the IIFE.
//The first () wraps the function making it an expression.
// The second () immediately invokes it, turning it into an IIFE (Immediately Invoked Function Expression).