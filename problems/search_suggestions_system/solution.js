/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    const res = [];
    products.sort();
    
    //mou, mouse
    //mouse, mou
        
    for (let i = 0; i < searchWord.length; i++) {
        const preFixRes = [];
        const preFix = searchWord.slice(0, i + 1);
        for (let j = 0; j < products.length; j++) {
            const product = products[j];
            if (product.startsWith(preFix)) {
                preFixRes.push(product);
                if (preFixRes.length === 3) break;
            }
        }
        res.push(preFixRes);
    }
    return res;    
    
//     function binarySearch(array, preFix) {
//         let l = 0,
//             r = array.length - 1;
        
//         while (l <= r) {
//             const m = Math.floor((l + r) / 2);
            
//             if (array[m].localCompare(preFix) >= 0) {
//                 r = m;
//             } else {
//                 l = m + 1;
//             }
            
//         }
//         return l;
//     }
    
};
// o < u