/**
 * Server for quiz
 * @author rmadhuram
 */
var restify = require('restify'),
    db = require('./persist/db.js').db;


/**
 * Server health ping
 */
function ok(req, res, next) {
  res.send('ok');
}

function players(req, res, next) {
    var connection = db.connect();

    var result = "error!";
    connection.query('SELECT * from Player', function(err, rows, fields) {
      if (err) {
        result = err;
        throw err;
      }

      console.log('The players list is;: ' + rows);
      result = rows;
      connection.end();
      res.send(result);
    });
}

var server = restify.createServer();
server.get('/hello', ok);
server.get('/players', players);

server.listen(80, function() {
  console.log('%s listening at %s', server.name, server.url);
});