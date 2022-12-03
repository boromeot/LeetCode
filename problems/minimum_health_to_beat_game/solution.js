/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
var minimumHealth = function(damage, armor) {
    let minHpNoBlock = 1;
    for (let d of damage) {
        minHpNoBlock += d;
    }

    let bestDamageBlock = Math.min(armor, Math.max(...damage));

    let minHpWithBlock = minHpNoBlock - bestDamageBlock;
    return minHpWithBlock;
    
};