/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let tank = 0;
    let start = 0;
    let total = 0;

    for (let i=0; i<gas.length; i++) {
        const diff = gas[i] - cost[i];
        tank += diff;
        total += diff;
        
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    return total < 0 ? -1 : start;
};