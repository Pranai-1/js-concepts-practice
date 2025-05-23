const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
   resolve("first success")
    },3000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
   resolve("second success")
    },5000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
   resolve("third success")
    },9000)
})
async function IWontWait(){

    let start=new Date().getTime()
    let end=start
    const res1=await p1;//wait for 3 seconds

    //execution starts after 3 seconds
    end=new Date().getTime()
    console.log(end-start,"time")
    let x=0;
    //This will take 2.5 seconds of time
   for(let i=0;i<5000000000;i++){
    x+=i;
   }
   end=new Date().getTime()
   console.log(end-start,"time")//total difference is 5.5 secs
   console.log(x+" "+(end-start))

    console.log(res1)
   // document.getElementById("signal").innerText=res1
    const res2=await p2;//wont wait because it has already waited for 5.5 secs and it should have got resolved in 5 seconds
    end=new Date().getTime()
    console.log(end-start)
    console.log(res2)//This promise had already been resolved as js engine suspended the task for 5.5 seconds
   
    const res3=await p3;//will wait for 4 more seconds.
    end=new Date().getTime()
    console.log(end-start)
    console.log(res3)
}
function normal(){
    console.log("I am in normal function")
}
function waiting(){
    let start=new Date().getTime();
    let end=start
    while(end-start<10000){
        end=new Date().getTime();
    }
    console.log(start+" "+end,end-start)
}
// waiting()
// IWontWait()
// normal()//This will gets executed before IwontWait() prints anything

//after the inclusion of the above waiting function,the thread will not print anything for 10 seconds,after 10 seconds
//all the promises will gets printed because all of them would have resolved within this waiting time as the promises 
//are outside of the function,if we put them inside of IwontWait then it will wait for another three seconds toresolve p1

//Promise API:-all expects array inside as parameter

Promise.all([p1,p2,p3])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})
//promise.all will get resolved after 6 seconds so,after printing second result in async function promise.all will give the 
//output followed by result3,if the time of p3 is more than 6 seconds then res1,res2,res3,promise.all this is the sequence
//of output printing

// Promise.allSettled([p1,p2,p3])
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

// Promise.race([p1,p2,p3])//executed first
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

// Promise.any([p1,p2,p3])
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error.errors)//check the syntax
// })



//document.getElementById("myButton").addEventListener("click",()=>alert("clicked"))  //alert is not a part of nodejs it is
//in browsers,if we try to run nodejs file without linking to html,we will get error,same with document

//alert("hello World"); is valid JavaScript.
// However, a ECMAScript validator will probably tell you it is not valid, because alert() is not part of the ECMAScript, 
//but a typically feature of JavaScript for Browsers. There are many features of JavaScript, which make only sense in a browser '
//environment, f.i. window.navigator, window.document, WebSocket, navigator.geolocation. Some would even say, this is not part 
//of JavaScript, but part of HTML5, which is not true, because HTML5 is just the markup language. However, these fancy new 
//features are often called HTML5, even though they are implemented in JavaScript.