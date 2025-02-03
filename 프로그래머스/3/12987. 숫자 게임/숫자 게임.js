function solution(A, B) {
    let answer = 0;
    let bIdx = 0;
    
    const aArr = A.sort((a, b) => a - b);
    const bArr = B.sort((a, b) => a - b);
    
    for(let i=0; i<aArr.length; i++) {
        for(let j=bIdx; j<bArr.length; j++) {
            if (aArr[i] < bArr[j]) {
                answer++;
                bIdx++;
                break;
            } else {
                bIdx++;
            }
        }
    }
    return answer;
} 