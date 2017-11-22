exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
    valueAtBit: function(num, bit) {
        var tempArray = num.toString(2).split(''),
            position;
        tempArray.reverse();
        position = bit - 1;
        return tempArray[position];
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var returnVal = (num >>> 0).toString(2);
        var arrayLengthExtra = 8 - returnVal.length;
        for (var i = 0; i < arrayLengthExtra; i++) {
            returnVal = "0" + returnVal;
        }
        return returnVal;
    },

    multiply: function(a, b) {
        return Math.round((a * b) * 10) / 10;
    }
};