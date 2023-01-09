/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let res = 0,
        l = 0,
        r = 0,
        sum = 0,
        average = 0;
    
    for (let i = 0; i < k; i++) {
        sum += arr[i];
        r++;
    }
    average = sum / k;
    if (average >= threshold) res++;

    while (r < arr.length) {
        sum -= arr[l];
        sum += arr[r];
        
        average = sum / k;
        if (average >= threshold) res++;
        
        l++, r++;
    }
    return res;
};