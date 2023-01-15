function solution(brown, yellow) {
    var answer = [];
    let arr = [];
    const n = brown + yellow;
    
    for(let i=1; i<=n; i++) {
        if (n%i == 0) {
            arr.push(i);
        }
    }

    for(let i=0; i<n; i++) {
        if((arr[i]-2) * (arr[arr.length-1-i]-2) == yellow) {
            answer = [arr[arr.length-1-i], arr[i]];
            break;
        }
    }

    return answer;
}
 