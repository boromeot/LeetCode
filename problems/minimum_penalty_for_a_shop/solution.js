/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    const N = customers.length;

    let best = 0;
    for (let cust of customers) {
        if (cust === 'Y') best++;
    }
    console.log(best)
    let bestI = 0,
    penalty = best;
    for (let i = 1; i < N + 1; i++) {
        if (customers[i - 1] === 'Y') {
            penalty--;
        } else {
            penalty++;
        }

        if (penalty < best) {
            best = penalty;
            bestI = i;
        }
    }
    return bestI;
};