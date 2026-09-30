let coinFlip;
let num = prompt("How many time to loop: ").toLowerCase().trim();
let streak = -1;

do {
    streak += 1;
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads");
        document.write("Heads");
    }
    else {
        console.log("Tails");
        document.write("Tails");
    }
} while (coinFlip === 0);

console.log(`You had a streak of ${streak}`);