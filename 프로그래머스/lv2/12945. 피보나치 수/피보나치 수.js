function solution(n) {
    let x = [0,1];
    
    for(let i=2; i<=n; i++) {
        x[i] = (x[i-2] + x[i-1]) % 1234567;
    }
    return x[n];
}