'use strict';

/**
 * Module dependencies.
 */
var config = require('nconf');
var path = require('path');
var express = require('express');
// end of dependencies.


module.exports = function() {
    
    this.use(express.favicon());

    if ('development' == this.get('env')) {
        this.use(express.logger('dev'));
    } else {
        this.use(express.logger('default'));
    }

    this.use(express.json());
    this.use(express.cookieParser());
    this.use(express.urlencoded());
    this.use(express.methodOverride());
    // use express.session before passport, so that passport session will work
    this.use(express.session({ secret: 'SECRET' }));

  /*  // Initialize Passport
    this.use(passport.initialize());
    this.use(passport.session());*/



    this.use(express.static('public'));

    this.use(this.router);
    // clearly denote public content
    this.use(express.errorHandler());
};