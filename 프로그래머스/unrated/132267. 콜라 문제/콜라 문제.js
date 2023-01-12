function solution(a, b, n) {
    var answer = 0;
    let x = a;
    let y = b;
    
    while (n >= a) {
        while (true) {
            x = y * (a/b);
            if (x > n) {
                break;
            }
            y += b;
        }
        x = (y-b) * (a/b);
        y -= b;
        
        
        n = n - x + y;
        answer += y;
        
        x = a;
        y = b;
    }
        
    return answer;
}