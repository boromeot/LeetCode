/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    const digits = [];
    for (let c of number) {
        if (c !== '-' && c !== ' ') {
            digits.push(c);
        }
    }
    const groups = [];
    let l = 0;
    while (digits.length - l > 4) {
        const group = [];
        for (let i = 0; i < 3; i++) {
            group.push(digits[l]);
            l++;
        }
        groups.push(group);
    }
    if (digits.length - l === 4) {
        groups.push([digits[l], digits[l + 1]]);
        groups.push([digits[l + 2], digits[l + 3]]);
    } else {
        const group = [];
        for (; l < digits.length; l++) {
            group.push(digits[l]);
        }   
        groups.push(group);
    }
    return groups.map(group => {
        return group.join('');
    }).join('-');
};