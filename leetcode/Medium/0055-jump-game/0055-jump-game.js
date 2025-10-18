/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let reach = 0;
    const lastIdx = nums.length - 1;

    for(let i=0; i<nums.length; i++) {
        if(i > reach) return false;
        reach = Math.max(reach, i + nums[i]);

        if (reach >= lastIdx) return true;
    }

    return reach >= lastIdx;
};