const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[1].split(" ").map(Number).sort((a,b) => a-b);
const m = parseInt(input[2]);
const M = input[3].split(" ").map(Number);
let answer = [];

function searchNumber(array, number) {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end)/2);
    
    while(number !== array[middle] && start <= end) {
        if (number < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end)/2);
    }
    if (number === array[middle]) return 1;
    else return 0;
}

M.map((el) => answer.push(searchNumber(N, el)));
console.log(answer.join(" "));
