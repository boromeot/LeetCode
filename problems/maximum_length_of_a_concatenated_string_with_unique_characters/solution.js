/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let res = 0;
    let set = new Set();

    bt(0);
    return res;

    function bt(i) {
        res = Math.max(res, set.size);
        if (i === arr.length) return;

        for (let j = i; j < arr.length; j++) {
            if (bad(arr[j])) continue;
            add(arr[j]);
            bt(j + 1);
            remove(arr[j]);
        }

    }

    function bad(s) {
        const dupes = new Set();
        for (let c of s) {
            if (set.has(c)) return true;
            if (dupes.has(c)) return true;
            dupes.add(c);
        }

        return false;
    }

    function add(s) {
        for (let c of s) {
            set.add(c);
        }
    }

    function remove(s) {
        for (let c of s) {
            set.delete(c);
        }
    }
}