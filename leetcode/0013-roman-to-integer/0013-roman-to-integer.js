/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const value = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const arr = s.split('');
    let answer = 0;

    for (let i=0; i<arr.length-1; i++) {
        if (value[arr[i]] < value[arr[i+1]]) {
            answer -= value[arr[i]];
        } else {
            answer += value[arr[i]]
        }
    }

    answer += value[arr[arr.length-1]];

    return answer;
};