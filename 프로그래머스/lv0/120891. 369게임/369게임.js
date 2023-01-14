function solution(order) {
    var answer = 0;
    let arr = [...order.toString()];
    let x;
    
    for (let i=0; i<arr.length; i++) {
        x = parseInt(arr[i]);
        if (x%3 == 0 && x!=0) {
            answer++;
        }
    }
    return answer;
}