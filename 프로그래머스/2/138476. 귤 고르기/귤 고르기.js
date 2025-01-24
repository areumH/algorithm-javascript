function getSort(array) {
    const obj =  array.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    
    return Object.entries(obj)
        .sort((a, b) => b[1] - a[1]).map(([k, v]) => v);
}

function solution(k, tangerine) {
    const arr = getSort(tangerine);
    let count = 0;
    let answer = 0;
    
    for(let i=0; i<arr.length; i++) {
        count += arr[i];
        answer++;
        
        if (count >= k) break;
    }
    return answer;
}