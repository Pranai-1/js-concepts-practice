// const fs=require("fs")
// fs.readFile("a.txt",'utf8',(err,data)=>{
//     if(data)console.log(data)
// })//This code will not work in browser,we get the following error but can be executed in nodejs
//It looks like you're trying to use the fs module in a web browser environment, 
// //which is not possible because the fs module is specific to Node.js and is not available in the browser.
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

//callback hell:-consider a starter and motor,when i hit the off button in the starter the starter send the signal to the motor 
//to the motor to tirn off and then starter displays turned off message and it disables the off button working

//This is the basic example,in this we didn't pass a function as callback,check the below one for callbacks

// function starter(){
//     function turnOn(){
//         document.getElementById("signal").innerHTML="turned on"
//         console.log("turned on")
//     }
//     function turnOff(){
//         function sendSignal(){
//             setTimeout(()=>{
//                 console.log("signal sent to motor")
//                 document.getElementById("signal").innerHTML="signal sent to motor"
//             },1000)
            
//             function stop(){
//                 setTimeout(()=>{
//                     document.getElementById("signal").innerHTML="motor stopped working"
//                     console.log("motor stopped working")
//                 },2000)
                
//                 function display(){
//                     setTimeout(()=>{
//                         document.getElementById("signal").innerHTML="motor turned off successfully"
//                         console.log("motor turned off successfully")
//                     },3000)
                    
//                     function disable(){
//                         setTimeout(()=>{
//                             document.getElementById("signal").innerHTML="disable the off functionality"
//                            console.log("disable the off functionality")
//                         },4000)
                        
//                     }
//                     disable()
//                 }
//                 display()
//             }
//             stop()
//         }
//         sendSignal()
//         setTimeout(()=>{
//             document.getElementById("signal").innerHTML="turned off"
//             console.log("turned off")
//         },5000)
       
//     }
//     return{turnOn,turnOff}
// }
// let obj=starter()
// obj.turnOff()

// document.getElementById("signal").style.color="red"

function starter(){
    function turnOn(){
        document.getElementById("signal").innerHTML="turned on"
        console.log("turned on")
    }
    function turnOff(sendSignal){
        setTimeout(()=>{
            document.getElementById("signal").innerHTML="turned off"
            console.log("turned off")
        },5000)
        sendSignal(function stop(){
            setTimeout(()=>{
                document.getElementById("signal").innerHTML="motor stopped working"
                console.log("motor stopped working")
            },2000)
            
        })
        display(function disable(){
            setTimeout(()=>{
                document.getElementById("signal").innerHTML="disable the off functionality"
               console.log("disable the off functionality")
            },4000)
            
        })
        function display(disable){
            setTimeout(()=>{
                document.getElementById("signal").innerHTML="motor turned off successfully"
                console.log("motor turned off successfully")
            },3000)
            disable()
        }
    }
    return{turnOn,turnOff}
}
function sendSignal(stop){
    setTimeout(()=>{
        console.log("signal sent to motor")
        document.getElementById("signal").innerHTML="signal sent to motor"
    },1000)
    stop()
   
}

let obj=starter()
obj.turnOff(sendSignal)

document.getElementById("signal").style.color="red"
//here we no longer have control over our code 
//callback hell and inversion of control are the disadvantages of using callbacks
//here we no longer have control over our code 
//callback hell and inversion of control are the disadvantages of using callbacks