'use strict';

var config         = require('nconf');

var mongoose       = require('mongoose');


module.exports = function(done) {

    mongoose.connection.on('open', function() {
        console.log('Connected to mongo server!');
        return done();
    });

    mongoose.connection.on('error', function(err) {
        console.log('Could not connect to mongo server!');
        console.log(err.message);
        done();
        return err;
    });

    try {
        mongoose.connect(config.get('mongoose:uri'));
        mongoose.connection;
        console.log('Started connection on ' + (config.get('mongoose:uri')) + ', waiting for it to open...');
    } catch (err) {
        console.log(('Setting up failed to connect to ' + config.get('mongoose:db')), err.message);
    }

};