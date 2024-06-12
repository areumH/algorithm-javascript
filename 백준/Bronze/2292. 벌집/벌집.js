const str = require('fs').readFileSync('/dev/stdin').toString().trim();
const x = parseInt(str);

let num = 1;
let count = 1;

while (num < x) {
    num += 6 * count;
    count++;
}

console.log(count);