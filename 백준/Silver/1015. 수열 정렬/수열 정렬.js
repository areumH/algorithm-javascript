const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const a = arr[1].split(' ').map(Number);
const b = arr[1].split(' ').map(Number).sort((a,b) => a - b); 
let answer = [];

a.forEach((el, i) => {
    let idx = b.indexOf(el);
    
    answer.push(idx);
    b[idx] = -1;
})

console.log(answer.join(' '));
