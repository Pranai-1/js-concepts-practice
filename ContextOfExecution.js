//This points to the context in which the function gets called
let a=5;

function parent(){
    console.log(this)
    let b=10;
    console.log(a+b)
    function child(){
       console.log("In child")
       console.log(this)
    }
    return child
   }
const parentObject = parent();
parentObject();  //this inside child points to window only

function parent1(){
   console.log(this)
   let b=10;
   console.log(a+b)
   function child1(){
      console.log("In child")
      console.log(this)
   }
   return {child1}
  }
const parentObject1 = parent1();
parentObject1.child1();  //this inside child points to {child1: ƒ}



let myobj={
   fnc:function child(){
      console.log(this) //here this points to {fnc: ƒ}
      console.log("Inside object")
   }
}
myobj.fnc()

// let elements; //This and below code are same

// document.addEventListener("DOMContentLoaded", ()=> {//arrow function
//   elements = document.getElementsByClassName("btn");

//   for (let i = 0; i < elements.length; i++) {
//     elements[i].style.color = "red";
    
//      Add a click event listener to each element
//     elements[i].addEventListener("click", function() {//anonymous normal function
//       printHi.call(this); // Pass the clicked element as the context to printHi
//     });
//   }
// });

let elements;
//   elements = document.getElementsByClassName("btn");//we will get HTML collection not an array

//   for (let i = 0; i < elements.length; i++) {
//     elements[i].style.color = "red";
    
//     // Add a click event listener to each element
//     elements[i].addEventListener("click", function() {//anonymous normal function
//       printHi.call(this); // Pass the clicked element as the context to printHi
//     });
//   }


function printHi() {
  console.log(this); // Points to the element that triggered the click event
  console.log("hi");
}

   // document.getElementById('myButton').addEventListener('click', function() {//normal function
   //   console.log(this); // Points to the button element
   // });
 
 

// let s=document.getElementsByName("Hello")//we get node list
// console.log(s)

// function y(x=(arr)=>{console.log(arr)}){
//    let arr=[1,2,3,4,5]
//    x(arr)
// }
// y()
