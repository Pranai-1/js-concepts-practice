function keyup(){//when a key is released
    console.log(`key is released`)
 }
 
 function debounce(func, delay) {
     let timerId;
     return function(...args) {
         const context = this;
         clearTimeout(timerId);//When the debounced function is called, it clears any existing timer (if present) using `clearTimeout`.
         timerId = setTimeout(() => {
             func.apply(context, args);
         }, delay);
     };
 }
 
 // Example usage:
 function handleInput() {
     console.log("Input changed");
 }
 
 const debouncedHandleInput = debounce(handleInput, 300); // Debounce input handling function with 300ms delay
 
 // Attach debounced handler to input element
 document.getElementById("myInput").addEventListener("input", debouncedHandleInput);
 //It fires whenever the value of the input element changes but debouncedHandleInput will have a delay
 function handleText(){
    console.log(this)// <input type=​"text" id=​"myInput" fdprocessedid=​"lict16">​
    console.log(this.value)
 }

 //approach 1
function debounceText(fnc,delay){
   let timerId
   return function(...args){
    console.log(timerId)
    clearTimeout(timerId);
         timerId = setTimeout(() => {
            console.log(args[0].target.value)//print the value of the text in the input
            console.log(this)// <input type=​"text" id=​"myInput" fdprocessedid=​"lict16">​
             fnc.apply(this, args);
         }, delay);
   }
}
 const getText=debounceText(handleText,300)

 //approach 2:-
 let timerId
 const getText2=function(...args){ 
     console.log(timerId)
     clearTimeout(timerId);
          timerId = setTimeout(() => {
             console.log(args[0].target.value)//print the value of the text in the input
             console.log(this)// <input type=​"text" id=​"myInput" fdprocessedid=​"lict16">​
             handleText.apply(this, args);
          }, 300);
    
 }
 

 document.getElementById("getText").addEventListener("input", getText);
 document.getElementById("getText2").addEventListener("input", getText2);
 //working:-
 //getText function needs a timerId that is not declared inside it because if it is declared inside it,for a new function call
 //the value of timerId will get re-assigned,in approach 1 we have created a clousure and returned and in second approach
 //we created a global variable