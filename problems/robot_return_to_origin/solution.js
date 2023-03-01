/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0,
        y = 0;
    
    const obj = {
        'R' : () => x++,
        'L' : () => x--,
        'U' : () => y++,
        'D' : () => y--,
    }

    for (let move of moves) {
        obj[move]();
    }

    return x === 0 && y === 0;
};