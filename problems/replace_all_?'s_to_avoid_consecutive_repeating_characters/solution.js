/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    const arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        const c = arr[i];
        if (c !== '?') continue;
        if (arr[i - 1] !== 'a' && arr[i + 1] !== 'a') {arr[i] = 'a'; continue;}
        if (arr[i - 1] !== 'b' && arr[i + 1] !== 'b') {arr[i] = 'b'; continue;}
        arr[i] = 'c';
    }
    return arr.join('');
};