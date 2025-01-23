function getCount(n, array) {
    let count = 0;
    
    for(let i=0; i<array.length; i++) {
        if (n === array[i]) count++;
    }
    return count;
}

function solution(N, stages) {
    let arr = [];
    const nArr = stages.sort((a,b) => a-b);
    
    for(let i=1; i<=N; i++) {
        const idx = nArr.indexOf(i);
        arr.push(getCount(i, stages)/(stages.length - idx))
    }
    
    return arr
        .map((el, idx) => ({ el, idx }))
        .sort((a, b) => {
            if (b.el === a.el) {
                return a.idx - b.idx;
            }
            return b.el - a.el;
        })
        .map(item => item.idx + 1);
}