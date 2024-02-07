const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const input = arr.map((el) => el.split(" "));
let array = [];
let answer = "";

function stackPush(array, number) {
    array.push(number);
}
function stackPop(array) {
    const str = array.length !== 0 ? array.pop() : -1;
    answer += str + "\n";
}
function stackSize(array) {
    const str = array.length;
    answer += str + "\n";
}
function stackEmpty(array) {
    const str = array.length !== 0 ? 0 : 1;
    answer += str + "\n";
}
function stackTop(array) {
    const str = array.length !== 0 ? array[array.length-1] : -1;
    answer += str + "\n";
}

input.forEach((el) => {
    if (el[0] === "push") { stackPush(array, el[1]) };
    if (el[0] === "pop") { stackPop(array, el[1]) };
    if (el[0] === "size") { stackSize(array, el[1]) };
    if (el[0] === "empty") { stackEmpty(array, el[1]) };
    if (el[0] === "top") { stackTop(array, el[1]) };
})
console.log(answer);