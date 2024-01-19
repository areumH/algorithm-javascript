const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
let array = [];

for(let i=0; i<n; i++) {
    arr[i] === 0 ? array.pop() : array.push(arr[i]);
}
console.log(array.reduce((acc,cur) => acc + cur, 0));