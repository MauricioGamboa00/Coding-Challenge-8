// Task 1 Function Declaration 

function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary *taxRate); // calculate net salary by adding bonus to base salary then subtracting by the base salary times tax rate
    return `Net Salary: $${netSalary.toFixed(2)}`; // return formatted net salary within two decimal places
};

console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"

// Task 2 Function Expression

let calculateDiscount = function(price, discountRate) { // crated a function to calculate a price after applying a discount
let finalPrice = price - (price * discountRate); // declared final price as equal to price minus price times discount rate

return `Final Price: $${finalPrice.toFixed(2)}`; // return formatted final price within two decimal places
};

console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"

