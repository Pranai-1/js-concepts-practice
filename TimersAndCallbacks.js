
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