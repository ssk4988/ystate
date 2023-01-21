


habits = ["Sleep Early", "Jog in the morning", "Drink Coffee at Night",
    "Call my Parents", "Eating fruits and vegetables", "Sleep Late", "Eating Junk Food"]

positivity = [2, 1, -1, 1, 1, -2, -1]

data = {}
let len = 100
freq = {}
for (let i = 0; i < len; i++) {
    var today = new Date();
    var priorDate = new Date(new Date().setDate(today.getDate() - (len - i)));
    var used = [];
    var score = 0;
    for (let j = 0; j < habits.length; j++) {
        if (Math.random() < 0.5) {
            used.push(habits[j]);
            score += positivity[j];
        }
    } 
    score = (Math.random() * 2 + 5) + 1 * score;
    score = Math.round(score);
    score = Math.max(score, 1);
    score = Math.min(score, 10);
    data[priorDate.toLocaleString().split(',')[0]] = {
        habits: used,
        rating: score
    }
    if (!(score in freq)) {
        freq[score] = 0;
    }
    freq[score]++;
}
console.log(JSON.stringify(data))
console.log(freq);
console.log(habits)

var fs = require('fs');
fs.writeFile("habits.json", JSON.stringify(habits), function(err) {
    if (err) {
        console.log(err);
    }
});
fs.writeFile("data.json", JSON.stringify(data), function(err) {
    if (err) {
        console.log(err);
    }
});
