const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let book = [];
let count = [];
let answer = [];

arr.map((el) => {
    if (book.includes(el)) {
        count[book.indexOf(el)]++;
    } else {
        book.push(el);
        count.push(1);
    }
})

const max = Math.max(...count);
for(let i=0; i<count.length; i++) {
    if (count[i] === max) {
        answer.push(book[i])
    }
}

console.log(answer.sort()[0]);
