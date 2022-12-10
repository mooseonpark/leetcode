/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const regex = /\./g;
    return address.replace(regex, '[.]')
};