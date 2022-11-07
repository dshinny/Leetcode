/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    var merged = [];
    var i = 0;
    var j = 0;
    while (i < firstList.length && j < secondList.length) {
        var first = firstList[i];
        var second = secondList[j];
        var firstBetween = first[0] >= second[0] && first[0] <= second[1];
        var secondBetween = second[0] >= first[0] && second[0] <= first[1];
        if (firstBetween || secondBetween) {
            merged.push([Math.max(first[0], second[0]), Math.min(first[1], second[1])])
        }
        if (first[1] < second[1]) {
            i++;
        } else {
            j++;
        }
    }
    return merged;
};