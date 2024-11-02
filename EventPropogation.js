//Event bubbling:-child-grand parent

// document.getElementById("time").addEventListener("click",(e)=>{
//    // e.stopPropagation()//it will stops the propogation
//  console.log(e)
//  console.log("time is clicked")
// })

//  const secondElements = document.getElementsByClassName("second");//get elements by classname returns an HTMLCollection
//  console.log(secondElements)
// for (let i = 0; i < secondElements.length; i++) {
//     secondElements[i].addEventListener("click", (e) => {//get
//         console.log(e);
//         console.log("parent clicked");
//     });
// }

//    document.getElementById("first").addEventListener("click",(e)=>{
//     console.log(e)
//     console.log("Grand parent clicked")
//    })


// Event Capturing:-Grand parent to child

document.getElementById("Interval").addEventListener("click",(e)=>{ 
    //e.stopPropagation()//it will stops the propogation
 console.log(e)
 console.log("Interval is clicked")
},false)

const secondElements2 = document.getElementsByClassName("second");//get elements by classname returns an array
for (let i = 0; i < secondElements2.length; i++) {
    secondElements2[i].addEventListener("click", (e) => {//get
        console.log(e);
        console.log("parent clicked");
    },true);
}

   document.getElementById("first").addEventListener("click",(e)=>{
    console.log(e)
    console.log("Grand parent clicked")
   },false)
//Output:-parent,interval,grandparent
//Whenever we add event handlers and click event occurs it will first check for the event capturing so,it will go to 
// to grand parent,grand parent has capturating boolean set as false,so it will not  gets executed.
//Next it will check parent,parent has set capturing to true so  executed.It reaches Interval and prints it,irrespective
//of the boolean and then it will execute the event bubbling for those functions that haven't executed during capturing.
//finally grandparent gets executed

//e.stopPropagation() is used to stop the propogation for both bubbling and capturing

//If we dont have any event listeners for the child,capturing followed by bubbling still happens and checks for 
//event listeners ofparents and grand parents.if there are no event lsiteners for parents and grand parents then no execution

//If the useCapture parameter is set to true when adding an event listener, event capturing will occur, 
//and event bubbling will be skipped.