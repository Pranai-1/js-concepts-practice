// let x=0;
// let a=0;
// for(let i=0;i<5;++i){
//     let y=++x//x will get incremented before assigning to y
//     let z=a++//a will get incremented after assigning to z
//     console.log(y+" "+z)
// }

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// let bignum=55545146546516546546n
// console.log(typeof bignum)

// let gameName = new String('hitesh-hc-com')
// let second=gameName
// gameName= new String('hitesh-c-com')
// console.log(second)

// let num=10;
// let num1=new Number(1000)
// let num2=new Number(100.658534)
// console.log(num+" "+num1)
// console.log(typeof num1)
// console.log(num1.toString())//output 4 because it has 4 characters
// console.log(num2.toFixed(2))//to fix upto 2 decimals
// console.log(num2.toPrecision(3))//it take 3 digits precisely and roundoff the 4 digit into its previous digit,output will be 101
// console.log(num2.toPrecision(4))//100.7
// console.log(num2.toPrecision(2))//1.0e+2
// let g=false;
// let f=new Boolean(false)
// console.log(f+" "+g)
// console.log(typeof f)
// const str = "Hello, world!";
// console.log(str.substring(1, 4)); // Output: "ell"
// console.log(str.substring(-1, 4))//Output: "Hell"
// console.log(str.substring(4, 1)); // Output: "ell" (swapped indices)
// console.log(str.slice(1, 4));// Output: "ell"
// console.log(str.slice(-1, -4)); // Output: ""
// console.log(str.slice(-6, -1)); // Output: "world" (slicing from end)
// console.log(str.slice(-6, 0))//output:""
// //for negative it is (end,start)


// const fruits = ["apple", "banana", "cherry"];
//    fruits.splice(1, 1, "grape", "orange"); // Replaces element at index 1
//    console.log(fruits); // Output: ["apple", "grape", "orange", "cherry"]

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));//gives the next value
// console.log(Math.floor(4.9));//give the same value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)