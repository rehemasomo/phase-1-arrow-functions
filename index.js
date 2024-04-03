// Define a function
const divide = function(a, b) {
    return a / b;
  }
  
  // Define an arrow function 
  const square = x => x * x;
  
  // Define an arrow function called add
  const add = (a, b) => a + b;
  
  // Export the functions for testing
  module.exports = {
    divide,
    square,
    add
  };
  