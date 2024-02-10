//Event bubbling:-child-grand parent

document.getElementById("time").addEventListener("click",(e)=>{
    e.stopPropagation()//it will stops the propogation
 console.log(e)
 console.log("time is clicked")
})

// const secondElements = document.getElementsByClassName("second");//get elements by classname returns an array
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


//Event Capturing:-Grand parent to child

document.getElementById("Interval").addEventListener("click",(e)=>{ 
    //e.stopPropagation()//it will stops the propogation
 console.log(e)
 console.log("Interval is clicked")
},false)

const secondElements = document.getElementsByClassName("second");//get elements by classname returns an array
for (let i = 0; i < secondElements.length; i++) {
    secondElements[i].addEventListener("click", (e) => {//get
        console.log(e);
        console.log("parent clicked");
    },false);
}

   document.getElementById("first").addEventListener("click",(e)=>{
    console.log(e)
    console.log("Grand parent clicked")
   },true)
//Output:-grandparent,interval,parent
//Whenever we add event handlers and click event occurs it will first check for the event capturing so,it will go to 
// to grand parent,grand parent has capturating boolean set as true,so it will gets executed.
//Next it will check parent,parent has set capturing to false so no execution.It reaches Interval and prints it,irrespective
//of the boolean and then it will execute the event bubbling for those functions that haven't executed during capturing.
//finally parent gets executed

//e.stopPropagation() is used to stop the propogation for both bubbling and capturing