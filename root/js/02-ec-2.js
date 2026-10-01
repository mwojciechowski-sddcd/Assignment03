let investment;
let rate;
let years;

do {
    investment = Number(prompt("Enter investment amount as xxxx.xx:"));
} while (isNaN(investment));

// Rate must be a number between 4% and 8% to be realistic
do {
    rate = Number(prompt("Enter interest rate as x.x:"));
} while (isNaN(rate) || rate < 4 || rate > 8);

do {
    years = Number(prompt("Enter number of years:"),10);
} while (isNaN(years) || years < 1 || years > 30);

console.log(`Investment: $${investment}`);
//document.write(`Investment: $${investment}<br>`);
console.log(`Rate: ${rate}%`);
//document.write(`Rate: ${rate}%<br>`);
console.log(`Years: ${years}`);
//document.write(`Years: ${years}`);