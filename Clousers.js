function clouser(){
  let a=100, c=10, y=10;
 return function b(){
      console.log(a+c)
  }
}

let inner=clouser()
inner()// b forms clouser with a and c,eventhough y is not used but it is still part of the memory due to clouser 
//which is like the unwanted memory this is one of the disadvantage,to avoid this some engines uses smart garbage collection
//through which they finds that y is not needed and it will be out of memory(check by debugging)

//Advantages:Data Hiding

function Counter(){
  let count=0;
  function increment(){
    count++;
    console.log(count)
  }
  // let increment=()=>{  //both are same
  //     count++;
  //     console.log(count)
  //   }
  function decrement(){
      count--;
      console.log(count)
    }
    return{
      increment,decrement
    }
}
//For every new function call it creates a new clouser with the count variable along with increment and decrement functions
let obj=Counter()
let obj1=Counter()
obj.increment()
obj.decrement()
obj.increment()
obj.increment()
obj1.increment()
obj1.decrement()


function Counter1(){
let count=0;
  this.increment=()=>{
      count++;
      console.log(count)
  }
  this.decrement=()=>{
      count--;
      console.log(count)
  }
 
}

let newObj=new Counter1()  //Example using constructor
newObj.increment()
newObj.increment()
newObj.decrement()

//Alternate to above(using without this)
function Counter2() {
  let count = 0;

  const increment = () => {
      count++;
      console.log(count);
  };

  const decrement = () => {
      count--;
      console.log(count);
  };

  const x = () => { 
      count *= 2;
      console.log(count);
  };

  return {
      increment,
      decrement,
      x
  };
}
