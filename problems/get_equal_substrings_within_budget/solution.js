var equalSubstring = function(s, t, maxCost) {
    const arr = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        arr[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }
    let res = 0;
    let sum = arr[0];
    let l = 0,
        r = 0;
    while (r < arr.length) {
       if (sum <= maxCost) {
           res = Math.max(res, r - l + 1);
           r++;
           sum += arr[r];
       } else {
           sum -= arr[l];
           l++;
       }
    }
    return res;
};