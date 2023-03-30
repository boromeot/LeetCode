/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    const N = citations.length;

    let count = 0;
    let res = N;
    for (let i = N - 1; i >= 0; i--) {
        const num = citations[i];
        if (num >= res) {
            count++;
        } else  {
            while (res > count && num < res) {
                res--;
            }
            count++
        }
        if (count === res) {
            break;
        }
    }
    return res;
};