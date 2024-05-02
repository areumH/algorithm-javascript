function solution(sequence, k) {
    if (sequence.includes(k)) 
        return [sequence.indexOf(k), sequence.indexOf(k)];
    
    let start = 0;
    let end = 1;
    let sum = sequence[0];
    let answer = [0, sequence.length - 1];
    
    while (true) {
        if (sum == k) {
            if (answer[1] - answer[0] + 1 > end - start) {
                answer[0] = start;
                answer[1] = end - 1;
            }
            sum -= sequence[start];
            start++;
        } else if (sum > k) {
            sum -= sequence[start];
            start++;
        } else if (sum < k && end < sequence.length) {
            sum += sequence[end];
            end++;
        } else break;
    }
    return answer;
}