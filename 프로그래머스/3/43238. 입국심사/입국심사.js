function solution(n, times) {
    let start = 1;
    let end = Math.max(...times) * n;
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        let people = times.reduce((acc, time) => acc + Math.floor(middle / time), 0);
        
        if (people < n) start = middle + 1;
        else end = middle - 1;
    }
    return start;
}