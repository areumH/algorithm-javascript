function solution(n) {
    let answer = 1;
    
    for(let i=1; i<=Math.floor(n/2); i++) {
        let sum = i;
        let x = i;
        
        while(true) {
            x++;
            sum += x;
            
            if (sum == n) {
                answer++;
                break;
            } else if (sum > n) {
                break;
            }
        }
    }
    return answer;
}
