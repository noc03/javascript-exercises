const repeatString = function(wrd, times) {
    let newWrd = "";
    if (times < 0) return "ERROR";
    for (let i = 0; i < times; i++) {
         newWrd = newWrd + wrd;
    }
    return newWrd;
};
console.log(repeatString("hola", -1))

// Do not edit below this line
module.exports = repeatString;
