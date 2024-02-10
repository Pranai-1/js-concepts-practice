function keyup(){//when a key is released
    console.log(`executed`)
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
function debounceText(fnc,delay){
   let timerId
   return function(...args){
    clearTimeout(timerId);
         timerId = setTimeout(() => {
            console.log(this)// <input type=​"text" id=​"myInput" fdprocessedid=​"lict16">​
             fnc.apply(this, args);
         }, delay);
   }
}
 const getText=debounceText(handleText,300)
 document.getElementById("myInput").addEventListener("input", getText);