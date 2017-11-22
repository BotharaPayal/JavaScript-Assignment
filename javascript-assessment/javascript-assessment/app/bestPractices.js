/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
    globals: function() {
        var myObject = {
            name: 'Jory'
        };

        return myObject;
    },

    parseInt: function(num) {
        var re = /[a-zA-Z]/g;
        while ((match = re.exec(num)) != null) {
            num = num.substring(0, match.index) + num.substring(match.index + 1, num.length)
        }
        return parseInt(num);
    },

    identity: function(val1, val2) {
        var returnVal = false;
        if (val1 === value2) {
            returnVal = true;
        }
        return returnVal;

    }
};