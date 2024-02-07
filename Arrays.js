// let arr=[5,8,1,4,6,2]
// arr.sort((a,b)=>a-b)//ascending
// arr.sort((a,b)=>b-a)//descending
// console.log(arr)

//Map,filter,reduce are higher order functions
//map returns a new Array after performing the operations
//for each wont return anything,it will change the original array
const users=[
    {name:'pranai',age:26},
    {name:'duggina',age:45},
    {name:'reddy',age:45},
    {name:'jolly',age:26},
    {name:'voe',age:66},
]

// const total=users.reduce((acc,curr)=>{
// return acc+=curr.age//dont forget to return
// },0)
// users.map((user)=>{   //it is returning a new array and assigning it to users array
//     return user.age*=2
// })
//  const users1=users.filter((user)=>{
//    return  user.age%2==0
// })
// console.log(users)
//  console.log(users1)
// console.log(total)

//return an array with age as key and number of users with the same age as values
// let obj={}
// users.map((user)=>{
//     if(obj[user.age])
//      obj[user.age]++
//     else
//     obj[user.age]=1
// })
// console.log(obj)

//same thing with reduce
// const output=users.reduce((obj,curr)=>{
// if(obj[curr.age])
// obj[curr.age]++
// else
// obj[curr.age]=1
// return obj
// },{})
// console.log(output)

//return the people with age 26

// const x=users.filter((user)=>user.age==26).map((user)=>user.name)
// console.log(x)//[ 'pranai', 'jolly' ]

// const output=users.reduce((arr,curr)=>{
//     if(curr.age==26)
//     arr.push(curr.name)
//     return arr
// },[])
// console.log(output)


// const numbers = [1,2,3,4,5];
//  const arrayToString = numbers.join(",");
//    console.log(arrayToString.replace(","," " )); //replaces only first occurence
//    console.log(arrayToString.replace(/,/g, " "));//replaces all occurences
const numbers=[1,2,3,4,4]
numbers.forEach((number, index, array) => {
    array[index] = number * 2;
});
console.log(numbers)


Array.prototype.customMethod = function() {
    return 'Custom method';
};

const arr = [1, 2, 3];

for (let key in arr) {
    console.log(key); // Output: 0, 1, 2 ,custom method.To avoid the execution of this custom emthod we use for of loops
}
for (let val of arr) {
    console.log(val); // Output: 1,2,3,it will not execute custom method
}