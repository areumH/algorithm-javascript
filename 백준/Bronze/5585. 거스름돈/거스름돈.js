const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const coin = [500, 100, 50, 10, 5, 1];

let price = 1000 - parseInt(input);
let idx = 0;
let answer = 0;

while(price !== 0) {
    if (price / coin[idx] > 0) {
        count = Math.floor(price / coin[idx]);
        price -= coin[idx] * count;
        answer += count;
    }
    idx++;
}
console.log(answer);