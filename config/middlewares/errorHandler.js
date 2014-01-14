'use strict';

/**
 * Module dependencies.
 */

// end of dependencies.

// errors handler
module.exports = function(err, req, res, next) {
    console.log(err.status);
    res.status(err.status || 500);
    res.render('error', { status: err.status || 500, error: err });

};