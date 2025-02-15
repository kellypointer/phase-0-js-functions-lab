




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
function calculateTax(rate, amount) {
    let percentage = rate / 100;
    let tax = percentage * amount;
    return tax;
}
let result = calculateTax(10, 50);
console.log(result);

function convertToUpperCase(text) {
    let result = text.toUpperCase()
    return result;
}
upper = convertToUpperCase("flatiron");
console.log(upper);

function findMaximum(num1, num2) {
    let maxnumber;
    if (num1 > num2) {
        maxnumber = num1;
    } else {
        maxnumber = num2;
    }
    return maxnumber;
}
findMaximum(2, 3);
console.log(findMaximum(2, 3));


function isPalindrome(word) {
    let reverse = word.split("").reverse().join("");
    if (word === reverse) { pal = "true";
    } else {
        pal = "false"
    }
    return pal;
}
console.log(isPalindrome("coffee"))
console.log(isPalindrome("racecar"))


function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountPrice = (originalPrice * ((100 - discountPercentage) / 100));
    return discountPrice;
}
let originalPrice = 100;
let discountPercentage = 20;
console.log(calculateDiscountedPrice(originalPrice, discountPercentage));
