function solution(s) {
    var answer = 0;
    let arr = [...s];
    let x = 0;
    let a = 0, b = 0;
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == arr[x]) {
            a++;
        } else {
            b++;
        }
        
        if (a == b) {
            answer++;
            x = i + 1;
            a = 0;
            b = 0;
        }
    }
    if (a!=0 || b!=0) {
        answer++;
    }
    return answer;
}