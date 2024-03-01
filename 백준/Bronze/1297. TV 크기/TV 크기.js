const [d, h, w] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
let answer = [];

const x = d / Math.sqrt(Math.pow(h, 2) + Math.pow(w, 2));
answer.push(Math.floor(h * x));
answer.push(Math.floor(w * x));

console.log(answer.join(" "));