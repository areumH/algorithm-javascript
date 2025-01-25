function solution(citations) {
    citations.sort((a,b) => b - a);
    
    for(let i=0; i<citations.length; i++) {
        if (i + 1 >= citations[i]) {
            return Math.max(citations[i], i);
        }
    }
    return citations.length;
}