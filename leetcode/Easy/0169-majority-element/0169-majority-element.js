/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const numMap = new Map();

    for(const num of nums) {
        numMap.set(num, (numMap.get(num) || 0) + 1);
        if(numMap.get(num) > nums.length/2) return num;
    }

    return;
};