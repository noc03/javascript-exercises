const fibonacci = function(num) {
    num = parseInt(num);
    if (num == 0) return 0;
    if (num < 0) return "OOPS";
    let arr = [1, 1];
    for (let i = 0; i < num; i++) {
        let result = arr[i] + arr[i + 1];
        arr.push(result);
    }
    return arr[num - 1];
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
