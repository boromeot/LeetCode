/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const digit = {
    '1' : 1,
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    '0' : 0,
}

var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    const n = num1.length,
          m = num2.length;
    const res = new Array(n + m).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            const pos1 = i + j, // Position under 
                  pos2 = i + j + 1; // Position under and left 1
            let sum = res[pos2] + digit[num1[i]] * digit[num2[j]];
            res[pos2] = sum % 10; // Last digit
            res[pos1] += Math.floor(sum / 10); // Digit not including the last
        }
    }
    if (res[0] === 0) res.shift();
    return res.join('');
};

// 738 + 6150 + 49200