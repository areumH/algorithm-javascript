function solution(elements) {
    const arr = [...elements, ...elements];
    let answer = [];

    arr.forEach((el, idx) => {
        if (idx < elements.length) {
            for (let i=0; i<elements.length; i++) {
                const nArr = arr.slice(i, i+1+idx);
                answer.push(nArr.reduce((a,b) => a+b));
            }
        }
    })
    return Array.from(new Set(answer)).length;
}