const input = require('fs').readFileSync('/dev/stdin').toString();
let len = parseInt(input);

const stick = [64, 32, 16, 8, 4, 2, 1];
let answer = 0;

for(let i=0; i<stick.length; i++) {
    if (len >= stick[i]) {
        answer++;
        len -= stick[i];
    }
    
    if (len === 0) break;
}

console.log(answer);