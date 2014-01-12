'use strict';

/**
 * Module dependencies.
 */
// End of dependencies.

module.exports = function() {    

    this.get('/', function (req, res, next){
    	res.render('index', { title: 'Express' });
    });
    
};