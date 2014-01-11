
var db = require('../persist/db.js').db;

/**
 * Get player info
 */
exports.getPlayer = function(req, res, next) {
    var queryString = 'SELECT * FROM Players WHERE id = ?';
 
    var result = "error!";
    connection.query(queryString, [req.params.id], function(err, rows, fields) {
      if (err) {
        result = err;
        throw err;
      }

      console.log('The players list is;: ' + rows);
      result = rows;
      res.send(result);
    });

};


exports.addPlayer = function(req, res, next) {
console.log('params; ' + JSON.stringify(req.params));
    console.log('First Name: ' + req.params.firstName);
    console.log('Last Name: ' +  req.params.lastName);

    res.send({name: req.params.firstname});
}
