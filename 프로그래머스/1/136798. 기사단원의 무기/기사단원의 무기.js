function solution(number, limit, power) {
    var answer = 0;
    let count;
    
    for(let i=1; i<=number; i++) {
        count = 0;
        
        for(let j=1; j<=Math.sqrt(i); j++) {
            if (i%j == 0) {
                if (j ** 2 === i) {
                    count += 1;
                } else {
                    count += 2;
                }
            }
        }
        if (count > limit) answer += power;
        else answer += count;
    }
    return answer;
}