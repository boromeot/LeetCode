/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1,
            r = n;
        
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            
            const bad = isBadVersion(m);
            
            if (bad && !isBadVersion(m - 1)) return m;
            
            if (bad) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
    };
};