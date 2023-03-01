function solution(s){
    var answer = true;
    let x = 0, y = 0;
    
    for(let i=0; i<s.length; i++) {
        if (s[i] == "p" || s[i] == "P") {
            x++;
        } else if (s[i] == "y" || s[i] == "Y") {
            y++;
        }
    }
    answer = (x == y) ? true : false;
    return answer;
}