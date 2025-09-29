const sumAll = function(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)
    && num1 > 0 && num2 > 0) {
        if (num2 < num1) {
            let ch = num1;
            num1 = num2;
            num2 = ch;
        }
        let accum = 0
        for (let i = num1; i <= num2; i++) {
            accum += i;
        }
        return accum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
