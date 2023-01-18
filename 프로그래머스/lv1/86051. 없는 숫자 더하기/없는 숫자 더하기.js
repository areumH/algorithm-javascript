function solution(numbers) {
    var answer = -1;
    let sum = 0;
    
    for(let i=1; i<=9; i++) {
        if (numbers.includes(i)) {
            sum += i;
        }
    }
    answer = 45 - sum;
    
    return answer;
}