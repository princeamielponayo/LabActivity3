// Problem 2: Star Pattern
let base = 1;

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "*";
        }
        console.log(stars);
    }
}

showStars(base + 2);  // 1 + 2 = 3 rows
