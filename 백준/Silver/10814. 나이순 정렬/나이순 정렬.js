const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const input = arr.map((el) => el.split(" "));
let answer = "";

input.sort((a,b) => a[0] - b[0]).forEach((el) => {
    answer += el.join(" ") + "\n";
})

console.log(answer);