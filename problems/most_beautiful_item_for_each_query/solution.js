/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
    items.sort((a, b) => a[0] - b[0]);

    let mx = items[0][1];
    
    for (let i = 0; i < items.length; i++) {
        mx = Math.max(mx, items[i][1]);
        items[i][1] = mx;
    }
    const res = [];
    for (const q of queries) {
        let l = 0,
            r = items.length - 1,
            a = 0;
        while (l <= r) {
            let m = Math.floor(l + (r - l) / 2);
            const [price, beauty] = items[m];
            if (price <= q) {
                a = beauty;
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        res.push(a);
    }
    return res;
};