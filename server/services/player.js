
var db = require('../persist/db.js').db;

/**
 * Get player info
 */
exports.getPlayer = function(req, res, next) {
   res.send({name: 'Test', id: req.params.id});
};


exports.addPlayer = function(req, res, next) {
console.log('params; ' + JSON.stringify(req.params));
    console.log('First Name: ' + req.params.firstName);
    console.log('Last Name: ' +  req.params.lastName);

    res.send({name: req.params.firstname});
}