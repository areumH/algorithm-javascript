function solution(nums) {
    const arr = new Set(nums);
    const l = arr.size;
    const c = nums.length/2;
    
    return l <= c ? l : c;
}