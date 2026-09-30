let coinFlip;
let num = prompt("How many time to loop: ").toLowerCase().trim();

for(i=0; i<num; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        alert("Heads");
    }
    else {
        alert("Tails");
    }
}