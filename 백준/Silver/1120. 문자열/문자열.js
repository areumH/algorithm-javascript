const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const len = b.length - a.length + 1;
let answer = [];

for(let i=0; i<len; i++) {
    let count = 0;
    
    for(let j=0; j<a.length; j++) {
        if (a[j] !== b[j + i]) {
            count++;
        }
    }
    answer.push(count);
}

console.log(Math.min(...answer))