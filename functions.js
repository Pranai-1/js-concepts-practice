

// function fetchData() {
//      fetch('http://localhost:3000')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }

// fetchData();

function Counter() {
    this.count = 0;//attaching the variable to the created instance
    var self = this;
    this.incrementRegular = function() {
      this.count++;
      console.log("Regular:", this.count);
    };
  
    this.incrementArrow = () => {
      this.count++;
      console.log("Arrow:", this.count);
    };
  
    setTimeout(function() {
      self.count++; // 'this' is not what we expect here so we use self
      console.log("Timeout Regular:", self.count);
    }, 1000);
  
    setTimeout(() => {
      this.count++; // 'this' is captured correctly
      console.log("Timeout Arrow:", this.count);
    }, 1500);
  }
  
  const counter = new Counter();
  
  counter.incrementRegular(); // Calls incrementRegular method
  counter.incrementArrow();   // Calls incrementArrow method
  