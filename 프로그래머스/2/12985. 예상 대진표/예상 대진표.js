function solution(n,a,b) {
    let round = 0;
    
    while(a != b) {
        a % 2 == 1 ? a = Math.ceil(a/2) : a = a / 2;
        b % 2 == 1 ? b = Math.ceil(b/2) : b = b / 2;
        round += 1;
    }
    return round;
}