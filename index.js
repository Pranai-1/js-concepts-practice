let a=5;
function parent(){
    console.log(this)
    let b=10;
    console.log(a+b)
    function child(){
       console.log("In child")
       console.log(this)
    }
    return {
        child: child,
      };
   }
// Call parent to get the object with the child method
const parentObject = parent();

// Call the child method
parentObject.child();
