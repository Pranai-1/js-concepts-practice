//we have 4 input elements,instead of attaching event listeners individually,we can attach a event listener 
//to its parent and can perform individual tasks according to the event generator
const getData=function(e){
    let id=e.target.id //to get the id of particular html element
    console.log(id)
    console.log(e.target.dataset.uppercase)
   if(e.target.dataset.uppercase=="capital")
   e.target.value= e.target.value.toUpperCase()
   if(e.target.dataset.lowercase=="small")
   e.target.value= e.target.value.toLowerCase()
console.log(e.target.value)
}

document.getElementById("third").addEventListener("input",getData)
// document.getElementById("third").addEventListener("input",getData,true)
function keyup(){//when a key is released
    console.log(`key is released`)
 }