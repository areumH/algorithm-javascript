function solution(array) {
    var answer = 0;
    
    for (let i=0; i<array.length; i++) {
        var num = String(array[i]).split("");
        
        for (let j=0; j<num.length; j++) {
            if (num[j] == "7") {
                answer += 1;
            }
        }
    }
    
    return answer;
}