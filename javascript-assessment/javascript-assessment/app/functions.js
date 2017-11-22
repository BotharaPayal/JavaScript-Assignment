exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
    argsAsArray: function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak: function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction: function(str) {
        var returnFunction = function(str2) {
            return str + ', ' + str2;
        };
        return returnFunction;
    },

    makeClosures: function(arr, fn) {
        var returnArray = [];
        for (var i = 0; i < arr.length; i++) {
            returnArray[i] = function(ivalue) {
                return fn(arr[ivalue]);
            }(i);
        }
        return returnArray;
    },

    partial: function(fn, str1, str2) {
        var returnFunction = function(str3) {
            return fn(str1, str2, str3);
        };
        return returnFunction;
    },

    useArguments: function() {
        var returnVal = 0;
        var args = Array.from(arguments);
        for (var i = 0; i < args.length; i++) {
            returnVal = returnVal + args[i];
        }
        return returnVal;
    },

    callIt: function(fn) {
        var args = Array.from(arguments);
        fn.apply(null, args);

    },

    partialUsingArguments: function(fn) {
        var args = Array.from(arguments);
        var returnFunction = function() {
            var args2 = Array.from(arguments);
            for (i = 0; i < args2.length; i++)
                args.push(args2[i]);
            return fn.apply(null, args);
        }
        return returnFunction;
    },

    curryIt: function(fn) {

    }
};