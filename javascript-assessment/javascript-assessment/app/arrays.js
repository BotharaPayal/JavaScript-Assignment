exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        var i;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == item)
                return i;
        }
        return -1;
    },

    sum: function(arr) {
        var i, sum = 0;
        for (i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum;
    },

    remove: function(arr, item) {
        var returnArray = arr.slice();
        for (var i = returnArray.length - 1; i >= 0; i--) {
            if (returnArray[i] == item) {
                returnArray.splice(i, 1);
            }
        }
        return returnArray;
    },

    removeWithoutCopy: function(arr, item) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == item) {
                arr.splice(i, 1);
            }
        }
        return returnArray;
    },

    append: function(arr, item) {
        var result = arr.slice();
        result.push(item);
        return result;
    },

    truncate: function(arr) {
        arr.splice(-1, 1);
        return arr;
    },

    prepend: function(arr, item) {
        var result = arr.slice();
        result.unshift(item);
        return result;
    },

    curtail: function(arr) {
        var result = arr.slice();
        result.shift(item);
        return result;
    },

    concat: function(arr1, arr2) {
        var returnArray = arr1.slice();
        for (var i = 0; i < arr2.length; i++) {
            returnArray.push(arr2[i]);
        }
        return returnArray;
    },

    insert: function(arr, item, index) {
        var returnArray = arr.slice();
        returnArray.splice(index, 0, item);
        return returnArray;
    },

    count: function(arr, item) {
        var returnVal = arr.reduce(function(n, value) {
            return n + (value === item);
        }, 0);
        return returnVal;
    },

    duplicates: function(arr) {
        var sorted_arr = arr.slice().sort();
        var returnArray = [];
        for (var i = 0; i < sorted_arr.length - 1; i++) {
            if (sorted_arr[i + 1] == sorted_arr[i]) {
                if (returnArray.indexOf(sorted_arr[i]) < 0) {
                    returnArray.push(sorted_arr[i]);
                }
            }
        }
        return returnArray;
    },

    square: function(arr) {
        var returnArray = arr.slice();
        returnArray = returnArray.map(function(x) {
            return Math.pow(x, 2);
        });
        return returnArray;
    },

    findAllOccurrences: function(arr, target) {
        var returnArray = arr.reduce(function(a, value, index) {
            if (value === target)
                a.push(index);
            return a;
        }, []);
        return returnArray;
    }
};