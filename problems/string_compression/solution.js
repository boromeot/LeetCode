/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0;
    let count = 1 

    for (let i = 0 ; i < chars.length; i++) {
            if(chars[i] === chars[i+1]) {
                count++
            }
            else {
                chars[index++] = chars[i]
                if(count > 1) {
                    const countString = count.toString()
                    for (let j = 0; j < countString.length; j++) {
                        chars[index++] = countString[j]
                    }
                }
                count = 1
            } 
    }
    return index
};