const [n, a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const A = a.split(" ").map((el) => parseInt(el)).sort((a,b) => a-b);
const B = b.split(" ").map((el) => parseInt(el)).sort((a,b) => b-a);

let answer = 0;

for(let i=0; i<n; i++) {
    answer += A[i] * B[i];
}
console.log(answer);