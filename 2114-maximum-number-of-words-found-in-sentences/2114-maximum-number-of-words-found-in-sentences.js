/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    return sentences.map(n=>n.split(' ').length).sort((a,b)=>b-a)[0]
};