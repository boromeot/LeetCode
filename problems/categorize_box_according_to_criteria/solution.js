/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    const volume = length * width * height;

    const bulky = volume >= Math.pow(10, 9) || length >= 10000 || width >= 10000 || height >= 10000;
    const heavy = mass >= 100;

    if (bulky && heavy) return 'Both';
    else if (!bulky && !heavy) return 'Neither';
    else if (bulky) return 'Bulky';
    else if (heavy) return 'Heavy';
    return 'Unkown';
};