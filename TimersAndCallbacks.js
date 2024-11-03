// const fs=require("fs")
// fs.readFile("a.txt",'utf8',(err,data)=>{
//     if(data)console.log(data)
// })//This code will not work in browser,we get the following error but can be executed in nodejs
//It looks like you're trying to use the fs module in a web browser environment, 
// which is not possible because the fs module is specific to Node.js and is not available in the browser.
let element=document.getElementById("time")
element.addEventListener("click",function cb(){
    setTimeout(()=>{
   element.style.color="blue"
      console.log("wait over")
    },1000)//eventhough it gets resolved after 1 second it will gets executed until main thread becomes free
    let startTime=new Date().getTime()
    let endTime=startTime
    while(endTime-startTime<5000){
        endTime=new Date().getTime()
    }
    console.log(startTime+" "+endTime)

})

let intervalElement = document.getElementById("Interval");

intervalElement.addEventListener("click", function cb() {
  let count = 0;
  let x;
  function startInterval() {
    x = setInterval(() => {
      count++;
      intervalElement.style.color = "blue";
      console.log("wait over");
      if (count === 2) {
        clearInterval(x);
      }
    }, 1000);
  }
  startInterval();
});


function clear(){
    return setInterval(()=>{
      console.log("in interval")
    }
    ,1000)
}
let returned=clear()
let startTime=new Date().getTime()
    let endTime=startTime
    while(endTime-startTime<5000){
        endTime=new Date().getTime()
    }
    console.log(startTime+" "+endTime)
clearInterval(returned)//setInterval will not even gets executed,it will get cleared as this line is taken care of main thread


document.getElementById("text").innerHTML="text"

// In JavaScript, callback functions are commonly used in asynchronous operations to handle the result of an asynchronous task once 
// it's completed.when multiple asynchronous tasks are nested within each other, the code structure becomes deeply nested. 

//It occurs because in JavaScript the only way to delay a computation so that it runs after the asynchronous call returns is to 
//put the delayed code inside a callback function.
// You cannot delay code that was written in traditional synchronous style so you end up with nested callbacks everywhere.


//check stacloverflow and freecodecamp
//callback hell:-consider a starter and motor,when i hit the off button in the starter the starter send the signal to the motor 
// to turn off and then starter displays turned off message and it disables the off button working

let msg1="signal sent to motor"
let msg2="motor stopped working"
let msg3="motor turned off successfully"
let msg4="disable the off functionality"

function sendSignal(data,callback){
    setTimeout(()=>{
        console.log(data)
        document.getElementById("signal").innerHTML=data
        callback()
    },1000)
}

function stop(data,callback){
    setTimeout(()=>{
        document.getElementById("signal").innerHTML=data
        console.log(data)
        callback()
    },1000)
}

function display(data,callback){
    setTimeout(()=>{
        document.getElementById("signal").innerHTML=data
        console.log(data)
        callback()
    },1000)
}

function disable(data,callback){
        document.getElementById("signal").innerHTML=data
       console.log(data)
       callback()

}

function starter(){
    function turnOn(){
        document.getElementById("signal").innerHTML="turned on"
        console.log("turned on")
    }

    function turnOff(){     
            sendSignal(msg1,()=>{
                        stop(msg2,()=>{
                            display(msg3,()=>{
                                disable(msg4,()=>{
                                    setTimeout(()=>{
                                        document.getElementById("signal").innerHTML="turned off"
                                        console.log("turned off")
                                    },2000)
                                })
                            })
                        })
            })
    }
    return{turnOn,turnOff}
}
let obj=starter()
obj.turnOff()

document.getElementById("signal").style.color="red"

//here we no longer have control over our code 
//callback hell and inversion of control are the disadvantages of using callbacks
//If we want to call a function after the completion of a potentially long running task then we need to pass the function 
//as a callback to that function

// function starterWithoutHell(){
//     function turnOn(){
//         document.getElementById("signal").innerHTML="turned on"
//         console.log("turned on")
//     }

//    async function turnOff(){     
//     try {
//         await sendSignal(msg1);
//         await stop(msg2);
//         await display(msg3);
//         await disable(msg4);

//         setTimeout(() => {
//             document.getElementById("signal").innerHTML = "turned off";
//             console.log("turned off");
//         }, 5000);
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }
       
//     }
//     return{turnOn,turnOff}
// }



// let controlledObj=starterWithoutHell()
// controlledObj.turnOff()