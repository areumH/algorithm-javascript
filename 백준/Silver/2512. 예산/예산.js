const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const array = input[1].split(' ').map(Number).sort((a,b) => a-b);
const M = parseInt(input[2]);
let answer = 0;

let start = 1;
let end = array[array.length-1];

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;

  array.forEach((el) => {
    if (el > mid) sum += mid;
    else sum += el;
  });

  if (M >= sum) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);