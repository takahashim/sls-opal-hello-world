'use strict';

const Opal = require('./handler.rb.js').Opal;

module.exports.hello = (event, context, callback) => {
    const env = Opal.JSON.$from_object(event, Opal.hash2([], {}));
    const rows = Opal.Handler.$new().$call(env).$to_n();
    const resCode = rows[0];
    const resHeaders = rows[1];
    const resBody = rows[2];
    const response = {
        statusCode: resCode,
        headers: resHeaders,
        body: resBody.join('')
    };

    callback(null, response);
};
