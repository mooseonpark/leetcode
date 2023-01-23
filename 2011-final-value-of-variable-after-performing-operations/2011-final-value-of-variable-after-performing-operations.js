/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let count = 0;
    operations.map(n=>n.includes("--")?count--:count++);
    return count;
    
};