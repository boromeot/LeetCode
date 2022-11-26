/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const obj = {};
    
    for (let cpd of cpdomains) {
        const count = getCount(cpd);
        let r = cpd.length - 1;
        while (cpd[r] !== ' ') {
            if (cpd[r] === '.') {
                const domain = cpd.slice(r+1, cpd.length);
                obj[domain] ? obj[domain] += count : obj[domain] = count;
            }
            r--;
        }
        const domain = cpd.slice(r+1, cpd.length);
        obj[domain] ? obj[domain] += count : obj[domain] = count;
    }
    const res = [];
    
    for (let domain of Object.keys(obj)) {
        const count = obj[domain];
        res.push(String(count) + ' ' + domain);
    }
    return res;
};

function getCount(cpd) {
    let r = 0;
    while (cpd[r] !== ' ') {
        r++;
    }
    return Number(cpd.slice(0, r));
}