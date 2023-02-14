/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const map = new Map();
    map.set(' ', ' ');
    for (let i = 0; i < key.length; i++) {
        const char = key[i];
        if (map.size >= 27) break;
        if (map.get(char) === undefined) {
            map.set(char, String.fromCharCode(97 + map.size - 1));
        }
    }
    let decoded = '';
    for (const char of message) {
        decoded += map.get(char);
    }
    return decoded;
};