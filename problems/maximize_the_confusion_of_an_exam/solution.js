/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let tCount = 0,
        fCount = 0;
    let res = 0;
    for (let i = 0, j = 0; i < answerKey.length; i++) {
        if (answerKey[i] === 'T') tCount++;
        else fCount++;

        while (tCount > k && fCount > k) {
            if (answerKey[j] === 'T') tCount--;
            else fCount--;
            j++;
        }
        res = Math.max(res, i - j + 1);
    }
    return res;
};

/*
    assert MCA(TTT, 0) === true
    assert MCA()


 */