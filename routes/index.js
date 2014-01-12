
/*
 * GET home page.
 */
/*
exports.index = function(req, res){
  res.render('index.ect', { title: 'Express' });
};
*/

module.exports = function() {    
    this.get('/', function (req, res, next){
    	res.render('index', { title: 'Express' });
    });
};