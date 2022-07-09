/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;
    
    hand.sort((a, b) => a - b);
    
    let count = new Map();
    for (let i = 0; i < hand.length; i++) {
        let num = hand[i];
        count.set(num, count.get(num) + 1 || 1)
    }

    while (count.size) {
        let [firstNum] = count.keys();
        for (let i = firstNum; i < firstNum + groupSize; i++) {
            if (!count.has(i)) {
                return false;
            }
            
            let freq = count.get(i);       
            
            if (freq === 1) {
                count.delete(i);
            } else {
                count.set(i, count.get(i) - 1);
            }
        }        
    }
    return true;
};