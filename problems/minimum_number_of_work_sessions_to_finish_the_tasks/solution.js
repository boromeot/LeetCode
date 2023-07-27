/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {
    let res = Infinity;
    let sessions = [];

    bt();
    return res;

    function bt(k = 0) {
        if (sessions.length >= res) return;

        if (k === tasks.length) {
            res = Math.min(res, sessions.length);
            return;
        }

        for (let i = 0; i < sessions.length; i++) {
            if (sessions[i] + tasks[k] <= sessionTime) {
                sessions[i] += tasks[k];
                bt(k + 1);
                sessions[i] -= tasks[k];
            }
        }
        sessions.push(tasks[k]);
        bt(k + 1);
        sessions.pop();
    }
};