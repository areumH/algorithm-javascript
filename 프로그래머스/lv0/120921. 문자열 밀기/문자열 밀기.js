function solution(A, B) {
    var answer = 0;
    let str = A;
    let count = 1;
    
    if (A == B) {
        answer = 0;
    } else {
        for (let i=0; i<A.length; i++) {
            let x = str.slice(0,A.length-1);
            let y = str.slice(A.length-1,A.length);
            str = y + x;
            
            if (str == B) {
                answer = count;
                break;
            } else {
                count++;
            }
        }
        if (answer == 0) {
            answer = -1;
        }
    }
    
    return answer;
}