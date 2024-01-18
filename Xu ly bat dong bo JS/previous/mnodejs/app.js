// app.js
// Import module math.js
const mathModule = require("./Math");

// Sử dụng các hàm từ module math.js
const sum = mathModule.add(5, 3);
const difference = mathModule.subtract(8, 4);

console.log("Sum:", sum);
console.log("Difference:", difference);
