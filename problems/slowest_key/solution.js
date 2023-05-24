/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let max = releaseTimes[0];
    let res = keysPressed[0];

    for (let i = 0; i < releaseTimes.length - 1; i++) {
        let duration = releaseTimes[i + 1] - releaseTimes[i];

        if (duration > max) {
            res = keysPressed[i + 1];
            max = duration;
        } else if (duration === max && keysPressed[i + 1] > res) {
            res = keysPressed[i + 1];
        }
    }
    return res;
};