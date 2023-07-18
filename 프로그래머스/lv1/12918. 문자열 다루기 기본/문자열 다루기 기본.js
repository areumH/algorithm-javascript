function solution(s) {
    const arr = s.split("")
    var answer = true;

    if (arr.length != 4 && arr.length != 6) {
        answer = false;
    } else {
        arr.forEach(el => {
            parseInt(el)%1 != 0 ? answer = false : null
        })
    }
                    
    return answer;
}