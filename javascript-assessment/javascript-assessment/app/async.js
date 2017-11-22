exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
    async: function(value) {
        var dfd = $.Deferred();
        var timeoutID = window.setTimeout(function() {
            if (value === true)
                dfd.resolve(true);
            if (value === 'success')
                dfd.resolve('success');
        }, 1000);
        return dfd.promise();
    },

    manipulateRemoteData: function(url) {
        var get = $.ajax({
            url: url
        });

        get.done(function(response) {
            var returnArray = [],
                data = response.people;
            for (var key in data) {
                returnArray.push(data[key].name);
            }
            returnArray.sort(); // Not required in this case.
        });

        get.fail(function() {
            console.log('Load failed');
        });
    }
};