const array = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = array.map(Number).sort((a,b) => a - b);

for(let i=1; i<=30; i++) {
    if (!arr.includes(i)) console.log(i)
}