/**
 * Module dependencies.
 */

var express = require('express');
var config = require('nconf');
var bootable = require('bootable');
var bootableEnv = require('bootable-environment');

var app = bootable(express());

// Setup initializers
app.phase(bootable.initializers('config/initializers/'));

//Setup environments
app.phase(bootableEnv('config/environments/'));

// Setup routes

app.phase(bootable.routes('routes/index.js'));

app.boot(function(err) {
    if (err) { throw err; }
    app.listen(config.get('express:port'), function() {
        console.log('Express server listening on port ' + config.get('express:port'));
    });
});