var request = require('request');

function fetchData(url) {

    return new Promise(function (resolve, reject) {
        request(url, function (err, response, body) {
            if (err) {
                return reject(err);
            } else if (response.statusCode !== 200) {
                err = new Error("Unexpected status code: " + response.statusCode);
                err.res = response;
                return reject(err);
            }
            resolve(body.trim());
        });
    });

}

module.exports = fetchData;
