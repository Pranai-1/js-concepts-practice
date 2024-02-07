const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
   resolve("first success")
    },3000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
   resolve("second success")
    },6000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
   resolve("third success")
    },3000)
})
async function IWontWait(){
    const res1=await p1;//wait for 3 seconds
    console.log(res1)
    const res2=await p2;//wait for another 3 seconds as already it waited for 3 seconds before 3+3=6
    console.log(res2)
    const res3=await p3;//wont wait for any time as it has already waited for 6 seconds.
    console.log(res3)//This promise had already been resolved as js engine suspended the task for 6 seconds
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
    console.log(start+" "+end)
}
IWontWait()
normal()//This will gets executed first
//waiting()
//after the inclusion of the above waiting function,the thread will not print anything for 10 seconds,after 10 seconds
//all the promises will gets printed because all of them would have resolved within this waiting time

//Promise API

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

Promise.allSettled([p1,p2,p3])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

Promise.race([p1,p2,p3])//executed first
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

Promise.any([p1,p2,p3])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error.errors)//check the syntax
})