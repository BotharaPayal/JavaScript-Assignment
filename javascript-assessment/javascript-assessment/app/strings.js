exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
    reduceString: function(str, amount) {
        var re = new RegExp("(.)(?=\\1{" + amount + "})", "g");
        return str.replace(re, "");
    },

    wordWrap: function(str, cols) {
        var returnVal = str.replace(/(^|[ ])[^ ]{2,}([ ]|$)/g, function(cols) {
            return cols.replace(' ', '\\n')
        });
        return returnVal;
    },

    reverseString: function(str) {
        var returnVal = str.split('').reverse().join('');
        return returnVal;
    }
};