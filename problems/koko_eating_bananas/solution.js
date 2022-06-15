/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1;
    let r = Math.max(...piles); // O(n)
    
    let k = r;
    
    while (l <= r) {
        let eatSpeed = Math.floor((l + r) / 2);
        
        let time = 0;
        for (let pile of piles) {
            time += Math.ceil(pile / eatSpeed);
        }
        
        if (time <= h) {
            k = Math.min(k, eatSpeed);
            r = eatSpeed - 1;
        } else if (time > h) {
            l = eatSpeed + 1;
        }
    }
    return k;
};

/*
[3,6,7,11] h = 8, k = 6
 1 2 2 3
time it takes to eat a pile = Math.ceil(pileSize / eatSpeed)

times it taktes to eat all piles (l) = Σ Math.ceil(piles[i] / eatSpeed) from i = 0 to i = piles.length - 1;
 
 if l > h : eatSpeed 
 
 1 2 3 4 5 6 7 8 9 10 11
       l r
       e
 h = 1 -> 2 -> 3 -> 4 -> 5
 
search area = 0 <--> 11 
              0 <--> Math.max(...piles)
*/