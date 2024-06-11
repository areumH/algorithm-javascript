const str = require('fs').readFileSync('/dev/stdin').toString().trim();
let word = [];

function getWord(str, fir, sec) {
    const first = str.slice(0, fir).split('').reverse().join('');
    const second = str.slice(fir, sec).split('').reverse().join('');
    const third = str.slice(sec).split('').reverse().join('');
    
    return first + second + third;
}

for (let i = 1; i < str.length - 1; i++) { 
    for (let j = i + 1; j < str.length; j++) { 
        word.push(getWord(str, i, j));
    }
}

word.sort();
console.log(word[0]);