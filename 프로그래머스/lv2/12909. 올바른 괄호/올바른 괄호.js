function solution(s){
    var answer = true;
    let stack = 0;
    
    for(let i=0; i<s.length; i++) {
        stack += s[i] == '(' ? 1 : -1;
        if (stack < 0) {
            answer = false;
            break;
        }
    }
    answer = stack == 0 ? true : false;
    return answer;
}