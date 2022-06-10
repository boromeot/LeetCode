/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {    
    let start = intervals.map(interval => interval[0]);
    let end = intervals.map(interval => interval[1]);
    
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);
    
    let l = 0,
        r = 0;
    
    let res = 0,
        onGoingMeetings = 0;
    
    
    while (l < start.length || r < end.length) {
        if (start[l] < end[r]) {
            onGoingMeetings++;
            l++;
        } else {
            onGoingMeetings--;
            r++;
        }
        res = Math.max(res, onGoingMeetings);
    }
    return res;
};

/*
0 ----------------------------- 30 room 1
      5 ----- 10  15 ---- 20       room 2
              


*/