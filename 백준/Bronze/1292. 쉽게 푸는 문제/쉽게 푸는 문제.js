const [a, b] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
let arr = [];
let count = 0;

while (arr.length <= b) {
    for(let i = 1; i<=b; i++) {
        for(let j=0; j<i; j++) {
            arr.push(i);
            
        }
        if (arr.length > b) break;
    }
}

const answer = arr.slice(a-1, b).reduce((acc, cur) => acc + cur, 0);
console.log(answer);