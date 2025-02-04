function solution(routes) {
    const arr = routes.sort((a,b) => a[1] - b[1]);
    
    let answer = 1;
    let x = arr[0][1];
    
    for(let i=1; i<arr.length; i++) {
        if (arr[i][0] <= x) {
            continue;
        } else {
            x = arr[i][1];
            answer++;
        }
    }
    
    return answer;
}