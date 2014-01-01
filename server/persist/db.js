/*
 * Database related functions
 * @author rmadhuram
 */

var mysql = require('mysql'),
    Database = function() {};

Database.prototype.connect = function() {
    this.connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'quiz'
    });
    this.connection.connect();
    return this.connection;
};

Database.prototype.end = function() {
    this.connection.end();
}

exports.db = new Database();