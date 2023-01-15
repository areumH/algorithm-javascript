function solution(price, money, count) {
    var answer = -1;
    let sum = 0;
    
    for(let i=1; i<=count; i++) {
        sum += price*i;
    }
    
    if (money >= sum) {
        answer = 0;
    } else {
        answer = sum - money;
    }

    return answer;
}