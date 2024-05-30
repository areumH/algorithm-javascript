function getSum(array) {
    return array.reduce((acc,cur) => acc + cur, 0);
}

function solution(score) {
    const average = score.map((el) => ( 
        getSum(el) / el.length
    ));
    const arr = [...average].sort((a,b) => b-a);
    
    return average.map((el) => arr.indexOf(el) + 1);
}