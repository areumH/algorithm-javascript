const [a, b, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const n = parseInt(a);
let k = parseInt(b);
const array = arr.map((el) => parseInt(el));

let answer = 0;
let count = 0;

for(let i=0; i<n; i++) {
    if (k/array[n-i-1] > 0) {
        count = Math.floor(k/array[n-i-1]);
        answer += count;
        k -= array[n-i-1] * count;
    }
}
console.log(answer);