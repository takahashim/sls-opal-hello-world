'use strict';

const Opal = require('./handler.rb.js').Opal;

module.exports.hello = (event, context, callback) => {
    const env = Opal.JSON.$from_object(event);
    const resOpal = Opal.Hello.$handler(env).$to_n();
    const response = {
        statusCode: resOpal.statusCode,
        body: resOpal.body
    };

    callback(null, response);
};
