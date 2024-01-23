const [n, ...array] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

function getSum(str) {
    const arr = str.split("");
    let sum = 0;
    
    for(let i=0; i<arr.length; i++) {
        if (!isNaN(parseInt(arr[i]))) {
            sum += parseInt(arr[i]);
        }
    }
    return sum;
}

array.sort((a,b) => {
    if (a.length < b.length) return -1;
    else if (a.length === b.length) {
        if (getSum(a) < getSum(b)) return -1;
        else if (getSum(a) === getSum(b)) {
            if (a < b) return -1;
        }
    }
})
console.log(array.join("\n"));
