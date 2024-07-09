var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let reversed = 0

    for (let temp = x; temp > 0; temp = Math.floor(temp / 10)) {
        reversed = reversed * 10 + temp % 10
    }

return x === reversed
};

console.log(isPalindrome(121))