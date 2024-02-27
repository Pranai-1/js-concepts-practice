//promises can be created using three ways
//1.using fetch
//2.using async function
//3.using promise constructor

function usingFetch() {
  let x=fetch("http://localhost:4000")
      .then(response => {
          if (response.status!==200) {
              console.log("error")
              throw new Error('Network response was not ok');
          }
          console.log(response)
          return response.json();//The response.json() method converts the ReadableStream of the body in the HTTP response 
          //to a JSON format.
      })
      .then(data => {
          console.log(data);
          return data
      })
      .catch(error => {
          console.log(error.message);
          return error
      });
return x;
}
console.log(usingFetch())//Promise {<pending>}
usingFetch()
  .then(result => {//The .then() method is used to handle the result of a Promise when it successfully resolves.
      console.log("Fetch result:", result);
  })
  .catch(error => {
      console.log("Error occurred:", error.message);
  });


async function usingAsync(){
  return "hello"
}
console.log(usingAsync())//Promise {<fulfilled>: 'hello'}
usingAsync().then((res)=>console.log(res))

async function usingAsync1() {
  let res 
  try {
       res = await fetch("http://localhost:4000");
      let data = await res.json();
      console.log(data);
  } catch (error) {
      console.log("Error:", error.message);
  }
  return res
}

usingAsync1()
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error.message)});

//Promise Chaining
document.getElementById("signal").style.color="red"
const signal= document.getElementById("signal")
function sendSignal(data) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log(data);
          signal.innerHTML = data;
          resolve();
      }, 1000);
  });
}

function stop(data) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log(data);
          signal.innerHTML = data;
          resolve();
      }, 1000);
  });
}

function display(data) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log(data);
          signal.innerHTML = data;
          resolve();
      }, 1000);
  });
}

function disable(data) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log(data);
          signal.innerHTML = data;
          resolve();
      }, 1000);
  });
}

function starter() {
  function turnOn() {
    signal.innerHTML = "turned on";
      console.log("turned on");
  }

   function turnOff() {
      try {
           sendSignal(msg1)
           .then(()=>{
            return stop(msg2);
           })
           .then(()=>{
            return display(msg3);
           })
           .then(()=>{
            return disable(msg4);
           })
           .then(()=>{
            new Promise((resolve) =>{
              setTimeout(()=>{
                resolve()
                signal.innerHTML = "turned off";
                console.log("turned off");
              },3000)
            } ); // Wait for 2 seconds
           })
          
      } catch (error) {
          console.error("An error occurred:", error);
      }
  }

  return { turnOn, turnOff };
}

const msg1 = "signal sent to motor";
const msg2 = "motor stopped working";
const msg3 = "motor turned off successfully";
const msg4 = "disable the off functionality";

const obj = starter();
obj.turnOff();


//stopping main thread
async function check(){
let a=await new Promise((res,rej)=>{
  setTimeout(()=>{
      res("success")
  },2000)
})
console.log("Hello")
console.log(a)
}
check()


function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Something result");
    }, 3000);
  });
}
function doAnotherAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Another result");
    }, 1500);
  });
}

function doFinalAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Final result");
    }, 1200);
  });
}

// Function to handle multiple promises
function multiplePromisesExample() {
  const promises = [
    doSomethingAsync(),
    doAnotherAsync(),
    doFinalAsync()
  ];

  return Promise.all(promises)
    .then(results => {
      console.log("All promises resolved:", results);//we get the output in an array form
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
}
multiplePromisesExample()
