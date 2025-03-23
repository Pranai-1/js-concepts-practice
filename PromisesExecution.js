function thenPromise(){
    console.log("Then Promise")
   let x=new Promise((res)=>res("resolved"))
   console.log(x)
   x.then((data)=>console.log(data))
   console.log("finished")
}

function normal(){
    console.log("normal")
    let sum=0;
    for(let i=1;i<=1000000002;i++){
          sum+=i
    }
    console.log("finished Normal")
    console.log(sum)
}
// thenPromise()
// normal()

//Flow of execution:-
//After the promise resolves, its .then() callback is placed into the microtask queue.The JavaScript engine continues 
// executing the remaining synchronous code inside thenPromise().Once thenPromise() finishes and exits the call stack,
//  the normal() function is called and runs to completion. Only after all synchronous code has finished,
// the event loop moves the .then() callback from the microtask queue into the call stack for execution.

function thenPromiseWithTimers(){
    console.log("Then Promise")
    console.log("startTime", new Date(Date.now()).toLocaleString())
   let x=new Promise((res)=>{
    setTimeout(()=>{
        res("resolved")
    },10000)
   
})
   console.log(x)
   x.then((data)=>{
    console.log("endTime", new Date(Date.now()).toLocaleString())
    console.log(data)})
   console.log("finished")
}

// thenPromiseWithTimers()
// normal()


//The thenPromiseWithTimers function is invoked and runs synchronously, registering a setTimeout in the Web API environment
//  immediately. The setTimeout callback waits asynchronously while the synchronous code finishes and the call stack clears.
//  Once the timer expires in the Web API, the callback is sent to the micro task queue. Then, when the event loop detects 
// the call stack is empty, it pushes the callback to the call stack where the promise gets resolved,
//  triggering the .then() callback via the microtask queue.

//Read Promises.txt

function thenPromiseWithFetch(){
    console.log("Then Promise")
    console.log("startTime", new Date(Date.now()).toLocaleString())
   let x=new Promise((res)=>{
   fetch("https://67b5992507ba6e59083d91f0.mockapi.io/cache/users")
    .then((res)=>res.json())
    .then((data)=>res(data))
   
})
   console.log(x)
   x.then((data)=>{
    console.log("endTime", new Date(Date.now()).toLocaleString())
    console.log(data)})
   console.log("finished")
}

// thenPromiseWithFetch()
// normal()

// let x= new Promise(async(res)=>{
//     let response=await fetch("https://67b5992507ba6e59083d91f0.mockapi.io/cache/users")
//     let data=await response.json()
//     res(data)
//replace .then with await the flow remains the same because we are not awaiting the promise.we are awaiting
//the callback function of promise which will be resolved after web api environment finished the fetch call.
//Due to the presence of async in promise callback,res(data) will be pushed into the microtask queue
//After res(data) comes into callstack and finished execution,.then() method of promise will again be sent 
//into microtask queue

async function  awaitPromiseWithFetch(){
    console.log("await Promise")
    console.log("startTime", new Date(Date.now()).toLocaleString())
   let x=await new Promise(async(res)=>{
  let response=await fetch("https://67b5992507ba6e59083d91f0.mockapi.io/cache/users")
  let data=await response.json()
  res(data)

   
})
   console.log(x)
   console.log("finished")
}

awaitPromiseWithFetch()
normal()

//await new Promise pauses the execution of the awaitPromiseWithFetch() function.if we dont place await the flow will be 
//normal returning a pending promise due to the asynchronous callback

//Flow is like this

 //- `awaitPromiseWithFetch()` is invoked and added to the call stack.  
// - Logs `"await Promise"`.  
// - Logs `"startTime"`.  
// - Creates a new Promise and its executor runs synchronously.  
// - Inside executor, `fetch()` is called and moves to the Web API environment.  
// - Executor pauses at `await fetch()` and returns a pending promise.  
// - `awaitPromiseWithFetch()` pauses at the outer `await` and leaves the call stack.  
// - `normal()` function is invoked and pushed onto the call stack.  
// - `normal()` runs fully, completing the loop and logs results.  
// - `normal()` exits the call stack.  
// - `fetch()` completes in the Web API and its promise resolution is placed in the microtask queue.  
// - Executor of the promise resumes in the microtask queue, and `response.json()` is called and sent to the Web API.  
// - Once JSON resolves, `res(data)` is called and resolves the promise.  
// - The resolution of `await new Promise()` places `awaitPromiseWithFetch()` back into the call stack.  
// - Logs the resolved `data`.  
// - Logs `"finished"`.  
// - Function completes and exits the call stack.