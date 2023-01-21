function solution(left, right) {
    var answer = 0;
    let count;
    let arr = [];
    
    for(let i=left; i<=right; i++) {
        count = 0;
        for(let j=1; j<=i; j++) {
            if(i%j == 0) {
                count++;
            }
        }
        arr.push([i,count]);
    }
    for(let i=0; i<arr.length; i++) {
        if(arr[i][1]%2 == 0) {
            answer += arr[i][0];
        } else {
            answer -= arr[i][0];
        }
    }
    return answer;
}