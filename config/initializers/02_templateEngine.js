'use strict';


// Module dependencies. 
var ECT = require('ect');
var path = require('path');
// end of dependencies.


module.exports = function() {
	//templates folder
	this.set('views', __dirname + '/../../app/views');
	var ectRenderer = ECT({ watch: true, root: __dirname + '/../../app/views' });


	this.engine('.ect', ectRenderer.render);
	this.set('view engine', 'ect');
	
};