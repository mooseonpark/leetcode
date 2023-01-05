/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let answer = 0;
    words.map(n=>n.includes(pref) && n.slice(0,pref.length)===pref ? answer++ : null);
    return answer
};