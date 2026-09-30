let coinFlip;
let streak = -1;

do {
    streak += 1;
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads");
        //document.write("Heads<br>");
    }
    else {
        console.log("Tails");
        //document.write("Tails<br>");
    }
} while (coinFlip === 0);

console.log(`You had a streak of ${streak} Heads!`);
//document.write(`You had a streak of ${streak} Heads!`);