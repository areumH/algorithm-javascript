const array = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = array.slice(1).reverse().map(Number);

let max = num[0];
let answer = 1;

for(let i=1; i<num.length; i++) {
    if (num[i] > max) {
        answer++;
        max = num[i];
    }
}

console.log(answer);