const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const number = parseInt(n);
const array = arr.map((el) => parseInt(el)).sort((a,b) => a-b);

let answer = array[0];
let time = array[0];
for(let i=1; i<n; i++) {
    time += array[i];
    answer += time;
}
console.log(answer);