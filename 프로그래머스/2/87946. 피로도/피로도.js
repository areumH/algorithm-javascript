function getArray(arr) {
    if (arr.length === 0) return [[]];
    if (arr.length === 1) return [arr];
    
    const result = [];
    arr.forEach((el, idx) => {
        const rest = arr.slice(0, idx).concat(arr.slice(idx + 1));
        getArray(rest).forEach((perm) => result.push([el, ...perm]));
    });
    return result;
}

function solution(k, dungeons) {   
    let answer = 0;
    const arr = getArray(dungeons);
    
    arr.forEach((el) => {
        let hp = k;
        let count = 0;
        
        for(let i=0; i<el.length; i++) {
            if (hp < el[i][0]) {
                break;
            } else {
                count++;
                hp -= el[i][1];
            }
        }
        
        if (answer <= count) answer = count;
    })
    
    return answer;
}