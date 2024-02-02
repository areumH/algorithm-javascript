const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const first = input[1].split(" ").map(Number).sort((a,b) => a-b);
const second = input[3].split(" ").map(Number);
let answer = [];

function searchNumber(array, number) {
    let start = 0;
    let end = array.length - 1;

    while(start <= end) {
        let middle = Math.floor((start + end)/2);
        
        if(array[middle] === number) {
            return 1;
        }
        else if (array[middle] < number) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return 0;
}

second.forEach((el) => answer.push(searchNumber(first, el)));
console.log(answer.join('\n'));