function handleNum(arr) {
    const newArr = arr.map((el) => parseInt(el.toString(2)));
    return newArr;
}

function handleStr(arr) {
    let result = [];
    
    arr.map((el) => {
        result.push(el.replace(/[1-2]/g,'#').replace(/0/g,' '));
    });
    return result;
}

function solution(n, arr1, arr2) {
    const nArr1 = handleNum(arr1);
    const nArr2 = handleNum(arr2);
    let array = [];
    
    for(let i=0; i<n; i++) {
        let str = (nArr1[i] + nArr2[i]).toString();
        array.push(str.padStart(n,'0'));
    }
    
    return handleStr(array);
}