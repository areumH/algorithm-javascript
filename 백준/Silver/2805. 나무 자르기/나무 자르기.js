const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...arr);

while (start <= end) {
    let middle = Math.floor((start + end)/2);
    let sum = 0;
    
    for(let i=0; i<N; i++) {
        if (sum >= M) break;
        if (arr[i] > middle) sum += arr[i] - middle;
    }
    if (sum >= M) start = middle + 1;
    else end = middle - 1;
}

console.log(end);