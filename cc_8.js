// Task 1 Function Declaration 

function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary *taxRate); // calculate net salary by adding bonus to base salary then subtracting by the base salary times tax rate
    return `Net Salary: $${netSalary.toFixed(2)}`; // return formatted net salary within two decimal places
};

console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"

