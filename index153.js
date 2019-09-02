const arithmetic  = {
    add : function (number1, number2) {
        return verifyNumberType(number1,number2) ? number1 + number2 : 'Please input numbers'; 
    },
    subtract: function (number1, number2) {
        return verifyNumberType(number1,number2) ? number1 - number2 : 'Please input numbers'; 
    },
    multiply: function (number1, number2) {
        return verifyNumberType(number1,number2) ? number1 * number2 : 'Please input numbers'; 
    },
    divide: function (number1, number2) {
        return verifyNumberType(number1,number2) ? number1 / number2 : 'Please input numbers'; 
    },
    remainder: function (number1, number2) {
        return verifyNumberType(number1,number2) ? number1 % number2 : 'Please input numbers'; 
    },
}

const verifyNumberType = function (number1, number2) {
    return typeof number1 === 'number' && typeof number2 === 'number' ? true : false;
}

console.log('Adding 2 and 10 is', arithmetic.add(2, 10));
console.log('Subtracting 5 from 10 is', arithmetic.subtract(10, 5));
console.log('Multiplying 3 and 100 is', arithmetic.multiply(3, 100));
console.log('Dividing 40 by 2 is', arithmetic.divide(40, 2));
console.log('Remainder of 20 is', arithmetic.remainder(20, 2));