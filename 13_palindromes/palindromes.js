const palindromes = function (str) {
    let original = str.replace(/[^a-zA-Z0-9\s]/g, '').replace(/ +/g, '');
    let reverse = original.split('').reverse().join('');
    if (original.toLowerCase() != reverse.toLowerCase()) return false;
    return true;
};

// Do not edit below this line
module.exports = palindromes;
