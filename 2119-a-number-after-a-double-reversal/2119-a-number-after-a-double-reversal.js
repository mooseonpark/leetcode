/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let answer = '';
    // let newNum = +num.toString().split('').reverse().join('');
    // let revNum = +newNum.toString().split('').reverse().join('');
    // revNum === num ? answer = 'true' : answer = 'false';
    if(num == 0)    return true;
    if(num % 10 == 0)   return false;
    return true;
};