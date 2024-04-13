function solution(babbling) {
    let answer = 0;
    
    babbling.forEach((bab) => {
        answer += checkString(bab);
    })
    
    return answer;
}

function checkString(str) {
    let able = ["aya", "ye", "woo", "ma"];
    
    for(let i=0; i<4; i++) {
        let count = (str.match(new RegExp(able[i], 'g')) || []).length;
        
        for(let j=0; j<count; j++) {
            if (str.includes(able[i]+able[i])) break;
            
            if (str.includes(able[i])) {
                str = str.replace(able[i], "1");
            }
        }
    }
    
    return !isNaN(str) ? 1 : 0;
}