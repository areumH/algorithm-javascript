const input = require('fs').readFileSync('/dev/stdin').toString();
const n = parseInt(input);
let arr = new Array(n+1).fill(0);

for(let i=2; i<=n; i++) {
    arr[i] = arr[i-1]+1;
    if (i%3 === 0) arr[i] = Math.min(arr[i], arr[i/3]+1);
    if (i%2 === 0) arr[i] = Math.min(arr[i], arr[i/2]+1);
}

console.log(arr[n]);