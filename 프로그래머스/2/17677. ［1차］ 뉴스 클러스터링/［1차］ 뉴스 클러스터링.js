function getArray(string) {
    let array = [];
    const Regex = /^[a-zA-Z]+$/;
    
    for(let i=0; i<string.length-1; i++) {
        const str = string.substring(i, i+2);
        if (Regex.test(str)) array.push(str);

    }
    return array;
}

function getIntersect(arr1, arr2) {
    let answer = 0;
    
    for(let i=0; i<arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            answer++;
            arr2[arr2.indexOf(arr1[i])] = 0;
        }
    }
    return answer;
}

function solution(str1, str2) {
    const Str1 = str1.toUpperCase();
    const Str2 = str2.toUpperCase();
    
    const x = getArray(Str1);
    const y = getArray(Str2);
    
    const sum = x.length + y.length;
    const intersect = getIntersect(x, y);
    
    const num = sum === 0 ? 1 : intersect / (sum - intersect);
    
    return Math.floor(num * 65536)
}