function solution(name, yearning, photo) {
    const result = [];
    
    const arr = [];
    for(let i=0; i<name.length; i++) {
        arr.push([name[i], yearning[i]]);
    }
    
    for(let i=0; i<photo.length; i++) {
        let sum = 0;
        for(let j=0; j<photo[i].length; j++) {
            if (name.includes(photo[i][j])) {
                let x = name.indexOf(photo[i][j]);
                sum += arr[x][1];
            }
        }
        result.push(sum);
    }
    return result;
}