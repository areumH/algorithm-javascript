function solution(n) {
    let arr = [];
    
    for(let i=2; i<=n; i++) {
        arr[i] = i;
    }
    
    for (let i=2; i<=n; i++) {
        if (arr[i] === 0) continue;
        
        for(let j=i*2; j<=n; j+=i) {
            arr[j] = 0;
        }
    }
    
    return arr.filter((el) => el).length;
}