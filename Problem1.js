// Problem 1: Grade Calculator
let base = 1;

function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

let score = base * 10 + 5;  // 1*10 + 5 = 15
console.log("Score:", score, "Grade:", calculateGrade(score));
