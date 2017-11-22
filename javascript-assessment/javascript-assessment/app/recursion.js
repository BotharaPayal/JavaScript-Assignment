exports = typeof window === 'undefined' ? global : window;

function printParenthesis(str, pos, n, open, close, returnArray) {
    if (close == n) {
        returnArray.push(str.join(''));
        return;
    } else {
        if (open > close) {
            str[pos] = ')';
            printParenthesis(str, pos + 1, n, open, close + 1, returnArray);
        }
        if (open < n) {
            str[pos] = '(';
            printParenthesis(str, pos + 1, n, open + 1, close, returnArray);
        }
    }
}


exports.recursionAnswers = {
    listFiles: function(data, dirName) {

    },

    permute: function(arr) {

        var returnArray = [];
        for (let i = 0; i < arr.length; i++) {
            let restA = arr.slice(0, i).concat(arr.slice(i + 1));
            let rest = permute(restA);
            if (rest.length === 0) {
                returnArray.push([arr[i]]);
            } else {
                for (let j = 0; j < rest.length; j++) {
                    returnArray.push([arr[i]].concat(rest[j]));
                }
            }
        }

        return returnArray;

    },

    fibonacci: function(n) {
        var result = 0;
        if (n <= 2) {
            return n - 1;
        }
        result = fib(n - 1) + fib(n - 2);
        return result;
    },

    validParentheses: function(n) {
        var str = [],
            returnArray = [];
        if (n > 0)
            printParenthesis(str, 0, n, 0, 0, returnArray);
        return returnArray;
    }
};