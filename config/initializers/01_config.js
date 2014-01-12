'use strict';


// Module dependencies. 
var config    = require('nconf');
// end of dependencies.


module.exports = function() {

    // Setup nconf
    config.argv()
        .env()
        .file({'file': 'config.json'});
};