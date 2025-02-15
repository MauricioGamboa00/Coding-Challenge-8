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

// Task 4 Parameters and Arguments

function calculateRentalCost(days, carType, insurance = false ) { // created funtion to calculate the rental cost of a car
    let dailyrate = carType === "Economy" ? 40 : carType === "Standard" ? 60: carType === "Luxury" ? 100: 0; // Declare daily rate of cars by car type
    let rentalcost = dailyrate * days; // Rental cost is equal to daily rate times days

    if(insurance) rentalcost += days * 20; // If insurance is present add to rental cost
   
    return `Total Rental Cost: $${rentalcost}`; // return total rental cost
};

console.log(calculateRentalCost(3, "Economy", true)); // Expected output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // Expected output: "Total Rental Cost: $500"

// Task 5 Returning Values

function calculateLoanPayment(principal, rate, time) { // created a function to calculate total loan payments
    let totalPayment = principal + (principal * rate * time); // calculate the total payment

    return `Total Payment: $${totalPayment.toFixed(2)}`; // return formated total payment within two decimal places
};

console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"

// Task 6 Higher Order Functions

let transactions = [200, 1500, 3200, 800, 2500]; // declared an array of transactions

let filterLargeTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction); // applying filter function to transaction array
};

let largeTransactions = filterLargeTransactions(transactions, amount => amount > 1000); // Filter Large transactions that are transactions over 1000

console.log("Large Transactions:", largeTransactions) // Expected output: [1500, 3200, 2500]

// Task 7 Closures: 

function createCartTracker() {
    let total = 0 // declared cart total as 0
    return function (amount){
        total += amount; // add amount to the cart total

        return `Total Cart Value: $${total}` // returning updated cart total
    };
};

let cart = createCartTracker(); // create a new instane of cart tracker

console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"

// Task 8 Recursion in JavaScript

function calculateSavings(years, amount) {
    if (years >=10) {
        return `Projected Saving: $${amount.toFixed(2)}`; // return formatted projected savings until it reaches 10 or more years
    };

    return calculateSavings(years + 1, amount * 1.05); // Increase saving by 5% for each year
};

console.log(calculateSavings(8, 1000)); // Expected output: "Projected Savings: $1102.50"
console.log(calculateSavings(5, 5000)); // Expected output: "Projected Savings: $6381.41"