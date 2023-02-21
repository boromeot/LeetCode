/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    current = timeToMinutes(current);
    correct = timeToMinutes(correct);
    let diff = correct - current;
    let res = 0;

    while (diff > 0) {
        if (diff >= 60) {
            diff -= 60;
        } else if (diff >= 15) {
            diff -= 15
        } else if (diff >= 5) {
            diff -= 5
        } else if (diff >= 1) {
            diff -= 1
        }
        res++;
    }
    return res;
};

function timeToMinutes(time) {
    let minutes = 0;

    minutes += Number(time[0]) * 60 * 10;
    minutes += Number(time[1]) * 60;
    minutes += Number(time[3]) * 10;
    minutes += Number(time[4]);
    return minutes;
}