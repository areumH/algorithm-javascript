function solution(array, height) {
    const arr = array.filter((el) => el > height);
    
    return arr.length;
}