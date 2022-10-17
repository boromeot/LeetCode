/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {  
    let res = "1";
    for (let i = 1; i < n; i++) {
        res = builder(res);
    }
    return res;
};


function builder(string) {
    let count = 1,
        res = "";
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            count++;
        } else {
            res += count + string[i];
            count = 1;
        }
    }
    return res;
}


//     "111221"

// "314241" "312211"



