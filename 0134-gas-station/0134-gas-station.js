/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var diffArr = [];
    for (var i = 0; i < gas.length; i++) {
        diffArr[i] = gas[i] - cost[i];
    }
    var tank = 0;
    var start = 0;
    var curr = 0;
    for (var i = 0; i < diffArr.length; i++) {
        tank += diffArr[i];
        curr += diffArr[i];
        if (curr < 0) {
            start = i + 1;
            curr = 0;
        }
    }
    if (tank < 0) return -1;
    return start;
};