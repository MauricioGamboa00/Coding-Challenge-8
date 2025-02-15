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

// Task 3 Arrow Function

let calculateServiceFee = (amount, serviceType) => { // creating an arrow function to calculate service fee based on service type
let rateFee = serviceType === "Premium" ? 0.15: serviceType === "Standard" ? 0.10 : serviceType === "Basic" ? 0.05 : 0; // Determine rate based on service type
let servicefee = amount * rateFee; // Service fee is equal to amount times rate fee

return `Service Fee: $${servicefee.toFixed(2)}`; // Return formatted service fee within two decimal places
};

console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"
