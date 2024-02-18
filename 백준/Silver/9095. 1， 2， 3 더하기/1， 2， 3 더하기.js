const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const t = input.shift();
let arr = [1, 2, 4];

for(let i=3; i<=10; i++) {
    arr.push(arr[i-1] + arr[i-2] + arr[i-3]);
}

for(let i=0; i<t; i++) {
    const n = input.shift();
    console.log(arr[n-1]);
}