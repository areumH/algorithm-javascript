function solution(s) {
    var answer = [];
    let arr = [...s];
    let num = [];
    
    for(let i=0; i<arr.length; i++) {
        num.splice(0,num.length);
        for(let j=0; j<i; j++) {
            if (arr[j] == arr[i]) {
                num.push(j);
            }
        }
        num.push(i);
        
        if (num.length == 1) {
            answer.push(-1);
        } else {
            answer.push(num[num.length-1]-num[num.length-2]);
        }
    }
    
    return answer;
}