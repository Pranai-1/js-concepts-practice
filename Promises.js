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
            return response.json();
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
usingFetch()
    .then(result => {
        console.log("Fetch result:", result);
    })
    .catch(error => {
        console.log("Error occurred:", error.message);
    });


async function usingAsync(){
    return "hello"
}
console.log(usingAsync())//Promise {<fulfilled>: 'hello'}

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

function starter(){
    function turnOn(){
        document.getElementById("signal").innerHTML="turned on"
        console.log("turned on")
    }
    function turnOff(){
       let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Signal sent to motor")
        },1000)
       })
       return promise
    }
    return{turnOn,turnOff}
}

let obj=starter()
obj.turnOff().then((data)=>{
    document.getElementById("signal").innerHTML=data
    console.log(data)
    return data
})
.then((data)=>{
    return stop(data)
})
.then((data)=>{
    document.getElementById("signal").innerHTML=data
    console.log(data)
    return data
})
.catch((error)=>{
    console.log(error.message)
})

async function stop(data){
    let res=await new Promise((resolve, reject) => {
        if(data=="Signal sent to motor"){
        setTimeout(()=>{
            resolve("motor stopped working")
        },1000)
    }else{
        reject("can't stop")
    }
    })
    return res
}
document.getElementById("signal").style.color="red"