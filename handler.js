'use strict';

const Opal = require('./handler.rb.js').Opal;

module.exports.hello = (event, context, callback) => {
    let hash;
    if (event) {
        hash = Opal.hash(event.headers);
    } else {
        hash = Opal.hash({});
    }
    const rows = Opal.Hello.$new().$call(hash).$to_n();
    const resCode = rows[0];
    const resHeaders = rows[1];
    const resBody = rows[2];
    const response = {
        statusCode: resCode,
        headers: resHeaders,
        body: JSON.stringify({
            message: resBody
        }),
    };

    callback(null, response);
};
