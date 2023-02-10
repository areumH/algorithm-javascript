function solution(s) {
    let arr = [];
    let count = 0, zero = 0;
    
    while(s != "1") {
        arr.splice(0,arr.length);
        
        for(let i=0; i<s.length; i++) {
            if (s[i] != "0") {
                arr.push(s[i]);
            } else {
                zero++;
            }
        }
        
        s = (arr.length).toString(2);
        count++;
    }
    return [count, zero];
}