const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = parseInt(input[0]);
const array = [0, ...input[1].split(' ').map(Number)];
let arr = Array(n+1).fill(0);

for(let i=1; i<n+1; i++) {
    x = 0;
    for(let j=0; j<i; j++) {
        if (array[i] > array[j]) x = Math.max(x, arr[j]);
    }
    arr[i] = x + 1;
}

console.log(Math.max(...arr));