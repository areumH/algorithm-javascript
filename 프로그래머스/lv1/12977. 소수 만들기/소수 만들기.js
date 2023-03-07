function getNum(n) {
    for(let i=2; i<n; i++) {
        if (n%i == 0) {
            return false;
            break;
        }
    }
    return true;
}

function solution(nums) {
    var answer = 0;
    let sum;
    
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            for(let k=j+1; k<nums.length; k++) {
                sum = nums[i] + nums[j] + nums[k];
                if (getNum(sum)) {
                    answer += 1;
                }
            }
        }
    }
    
    return answer;
}