/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var tank = 0;
    var start = 0;
    var curr = 0;
    for (var i = 0; i < gas.length; i++) {
        var diff = gas[i] - cost[i];
        tank += diff;
        curr += diff;
        if (curr < 0) {
            start = i + 1;
            curr = 0
        }
    }
    if (tank >= 0) {
        return start;
    }
    return -1;
};