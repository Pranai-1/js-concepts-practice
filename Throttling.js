function throttle(func, delay) {
    let isThrottled = false;
    let lastArgs;
    return function(...args) {
        if (!isThrottled) {
            // Execute the function immediately
            func.apply(this, args);
             console.log(this)//this points to window because we added event listener to window
             console.log(args)//[Event]
             // When an event occurs and triggers the event listener, the browser automatically passes an event object to 
             //the event handler function.Thats why we can print args
            isThrottled = true;
            setTimeout(() => {
                isThrottled = false;//free the thtrolled after the 1000ms
                // If there were additional calls during the delay, execute the function with the last arguments
                if (lastArgs) {  
                    //This block is to execute the code in a scenario in which the final call is made before delay
                    //then it wont gets called as throttled is set to true,so to avoid that we store args which is by default
                    //sent as a parameter and if it exist we execute here
                    func.apply(this, lastArgs);
                    lastArgs = null;
                }
            }, delay);
        } else {
            // Store the arguments for the next execution
            lastArgs = args;
        }
    };
}

// Example usage:
function handleResize() {

    console.log("resized"+ window.innerWidth);
}

const throttledHandleResize = throttle(handleResize, 5000); // Throttle resize handling function with 5000ms delay

// Attach throttled handler to window scroll event
window.addEventListener("resize", throttledHandleResize);



// throttling says function call should be executed if the time gap betweenfunction call and the current time is 5000ms 
// to execute the next function call

//if i resize, the first resize will get printed and after 5000ms,it will print the resize after 5000ms or the last function call
