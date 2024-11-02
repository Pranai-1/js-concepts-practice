const data = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA",
        coordinates: {
            latitude: 40.7128,
            longitude: -74.0060
        },
        place:{
            nearest:"xyz"
        }
    },
    contacts: {
        email: "john@example.com",
        phone: "123-456-7890",
        social: {
            twitter: "@john_doe",
            linkedin: "john-doe"
        }
    },
    education: {
        primary: {
            name: "Primary School",
            years: "2000-2006"
        },
        secondary: {
            name: "High School",
            years: "2006-2010"
        },
        university: {
            name: "University",
            degree: "Computer Science",
            years: "2010-2014"
        }
    },
    hobbies: ["Reading", "Hiking", "Photography"]
};

function deStructure(data,mainKey,output){
const keys=Object.keys(data)
for(let key of keys){
    if(typeof data[key] !=="object"){
        output[mainKey+key]=data[key]
    }else{
        let newMainKey = mainKey.length === 0 ? `${key}.` : `${mainKey}${key}.`;
        deStructure(data[key],newMainKey,output)
       
    }
   
}
return output
}

function deStructure2(data, mainKey = '', output = {}) {//if no arguments
    const keys = Object.keys(data);
    for (let key of keys) {
        if (typeof data[key] !== "object" || data[key] === null) {
            output[mainKey + key] = data[key];
        } else {
            let newMainKey = mainKey.length === 0 ? `${key}.` : `${mainKey}${key}.`;
            deStructure(data[key], newMainKey, output);
        }
    }
    return output;
}

//console.log(deStructure(data,"",{}))


async function Async(){
   const promise=await new Promise((resolve,reject)=>{
    console.log("resolving promise")
   // resolve("resolved")
   setTimeout(()=>{   resolve("resolved")},5000)
 
   })
   //promise.then((res)=>console.log(res))
//    let start=new Date().getTime()
//    let end=start
//    while(end-start<2000){
//         end=new Date().getTime()
//    }
   console.log("Hello")
}

Async()
//A Promise is a built-in JavaScript object used for asynchronous operations,a Promise is not a web API.
// When you call .then() on a Promise, you're registering a callback function to be executed asynchronously when the Promise is resolved.
//  However, this callback function is executed in the JavaScript runtime environment, not in the Web API environment.


async function print(){
  let x;
  try{
   x= await y();
  }catch(error){
    console.log("Rejected")
  }
  console.log(x)
  console.log("Pranai")
  return x;
}
function y(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const error=new Error("Error occured")
    reject(error)
  },2000)
}) }

let res=print().then(data=>{console.log(data)}).catch(data=>{console.log(data+" error")})
//both are same 
// let res=print()
// res.then(data=>{console.log(data)}).catch(data=>{console.log(data+" error")})