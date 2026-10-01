let answer;

do {
    answer = prompt("Repeat entries? (y or n)", "y");
} while (answer !== "y" && answer !== "n");

console.log(`You entered: ${answer}`);