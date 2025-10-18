/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let count = 0; // 점프 횟수
    let last = 0; // 현재 점프의 끝
    let maxReach = 0; // 다음 점프로 도달 가능한 최대값 

    for(let i=0; i<nums.length - 1; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);

        if (i === last) {
            count++;
            last = maxReach;
        }
    }

    return count;
};