function clouser(){
    let a=100, c=10;
   return function b(){
        console.log(a+c)
    }
}

let inner=clouser()
inner()// b forms clouser with a and b,eventhough b is not used this variable b is still part of the memory due to clouser 
//which is like the unwanted memory this is one of the dis advantage,to avoid this some engines uses smart garbage collection
//through which they finds that b is not needed and it will be out of memory(check by debugging)

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

let obj=Counter()
let obj1=Counter()
obj.increment()
obj.decrement()
obj.increment()
obj.increment()
obj1.increment()
obj1.decrement()
//For every new function call it creates a new clouser with the count variable along with increment and decrement functions

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