/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let x = 0, y = 0;
    let v = 0; // 0: n, 1: e, 2: s, 3: w
    const d = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for (let i = 0; i < instructions.length; i++) {
        const c = instructions[i];
        if (c === 'R') v = (v + 1) % 4;
        if (c === 'L') v = (v + 3) % 4;
        if (c === 'G') x += d[v][0], y += d[v][1];
    }
    return v !== 0 || (x === 0 && y === 0);
};