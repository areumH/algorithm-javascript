function solution(num, total) {
    var answer = [];
    let sum;
    let m;
    
    for(let i=1000; i>=0; i--) {
        sum = 0;
        for(let j=0; j<num; j++) {
            sum += (i - j);
        }
        if (sum == total) {
            m = i;
            break;
        }
    }
    for(let i=0; i<num; i++) {
        answer.push(m-i);
    }
    answer = answer.sort((a,b) => a-b);

    return answer;
}