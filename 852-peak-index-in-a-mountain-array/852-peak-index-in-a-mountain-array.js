/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let peak;
    
    for (let i = 1; i < arr.length - 1; i++) {
        let prev = arr[i-1];
        let curr = arr[i];
        let next = arr[i+1];
        
        if (prev < curr && curr > next) {
            peak = arr[peak] > arr[i] ? peak : i;
        }
    }
    return peak;
};