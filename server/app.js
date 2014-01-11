/**
 * Server for quiz
 * @author rmadhuram
 */
var restify = require('restify'),
    db = require('./persist/db.js').db,
    player = require('./services/player.js');
    connection = db.connect();


/**
 * Server health ping
 */

var server = restify.createServer();
server.use(restify.bodyParser());

server.get('/player/:id', player.getPlayer);
server.post('/player', player.addPlayer);


server.listen(80, function() {
  console.log('%s listening at %s', server.name, server.url);
});
