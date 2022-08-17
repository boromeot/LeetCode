/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {

    const arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    let set = new Set();
    
    for (let s of words) {
        let morseCode = '';
        for (let c of s) {
            morseCode += arr[c.charCodeAt() - 97];
        }
        set.add(morseCode);
    }
    return set.size;
};
