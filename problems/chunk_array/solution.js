/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    // const len = arr.length
    const resultArray = []
    if(arr.length < 1){
        return arr
    }else{
       for(let i=0;i<arr.length;i=i+size){
           resultArray.push(arr.slice(i,i+size))
       } 
    }
    return resultArray
};
