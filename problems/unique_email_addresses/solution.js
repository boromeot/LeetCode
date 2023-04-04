/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const set = new Set();
    for (let email of emails) {
        set.add(parseEmail(email));
    }
    return set.size;
};

function parseEmail(email) {
    let [local, domain] = email.split('@');
    let newLocal = '';
    for (let c of local) {
        if (c === '+') break;
        if (c !== '.') newLocal += c;
    }
    return newLocal + '@' + domain;
}