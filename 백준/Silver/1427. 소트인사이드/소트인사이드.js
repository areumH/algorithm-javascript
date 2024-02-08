const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const array = input.split("").map(Number);

console.log(array.sort((a,b) => b-a).join(""));
