/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) { // time O(N), space O(N);

    let arr1 = version1.split('.'),
        arr2 = version2.split('.');

    let len = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < len; i++) {
        let num1 = Number(arr1[i]) || 0,
            num2 = Number(arr2[i]) || 0;

        if (num1 === num2) continue;

        if (num1 < num2) return -1;
        else return 1;
    }
    return 0;
};