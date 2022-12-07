/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let multiple = 1;
    let add = 0;
    let arr = n.toString().split('');
    let answer = 0;
    for(let i=0; i<arr.length; i++){
        answer = (multiple*=arr[i]) - (add+= +arr[i]);
    }
    return answer
};