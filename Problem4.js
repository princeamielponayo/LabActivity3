// Problem 4: Multiplication Table
let base = 1;

function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

multiplicationTable(base); // table of 1