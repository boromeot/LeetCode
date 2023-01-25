/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let res = [];
    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'G') {
            res.push('G');
        }
        if (command[i] === '(' && command[i + 1] === ')') {
            res.push('o');
        }
        if (command[i] === '(' && command[i + 1] === 'a') {
            res.push('al');
        }
    }
    return res.join('');
};