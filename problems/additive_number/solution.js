/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    if (num.length < 3) return false;

    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            let num1 = num.slice(0, i + 1);
            let num2 = num.slice(i + 1, j + 1);
            let rest = num.slice(j + 1);

            if(num1.length > 1 && num1[0] === '0') return false;
            if (num2[0] === '0' && num2.length > 1) break;
            if (rest.length < num1.length || rest.length < num2.length) break;
            if (isValid(num1, num2, rest)) return true;
        }
    }
    return false;
    function isValid(num1, num2, rest) {
        if(!rest.length) return true;
        const sum = (+num1 + +num2).toString();
        if (!rest.startsWith(sum)) return false;
        return isValid(num2, sum, rest.slice(sum.length));
    }
};