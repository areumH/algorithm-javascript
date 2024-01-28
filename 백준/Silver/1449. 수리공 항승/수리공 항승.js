const [n, l, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
arr.sort((a,b) => a-b);

let left = arr[0] - 0.5;
let right = 0;
let answer = 0;

for(let i=0; i<arr.length; i++) {
    right = arr[i] + 0.5;
    if (right > left) {
        answer++;
        left = arr[i] + l - 0.5;
    }
}
console.log(answer);