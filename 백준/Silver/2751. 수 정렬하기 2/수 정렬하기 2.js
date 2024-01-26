const [n, ...array] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(array.sort((a,b) => a-b).join("\n"));